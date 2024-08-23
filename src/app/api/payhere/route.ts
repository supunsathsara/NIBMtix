import { supabase } from "@/utils/supabase/serviceUser";
import { createHash } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = await req.text();
  const formData = new URLSearchParams(body);

  // Extract specific fields
  const order_id = formData.get("order_id");
  const payment_id = formData.get("payment_id");
  const amount = formData.get("payhere_amount");
  const md5sig = formData.get("md5sig");
  const method = formData.get("method");
  const status_code = formData.get("status_code");

  //validate payment
  const hashedMerchantSecret = createHash("md5")
    .update(process.env.PAYHERE_MERCHANT_SECRET!)
    .digest("hex")
    .toUpperCase();
  const hashOnSever = createHash("md5")
    .update(
      process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID! +
        order_id +
        amount +
        "LKR" +
        status_code +
        hashedMerchantSecret
    )
    .digest("hex")
    .toUpperCase();

  if (md5sig !== hashOnSever) {
    console.log("Invalid payment");
    return NextResponse.json({ message: "Invalid payment" });
  }

  try {
    const newPayment = {
      ticket_id: order_id,
      payment_id: payment_id,
      amount: amount,
      status_code: status_code,
      payment_method: method,
    };

    const newTicket = {
      id: order_id,
      name: "system",
      email: "system",
      mobile: "system",
      payment_method: 2,
      status: status_code == "2" ? 1 : status_code == "-3" ? 2 : 0, // 0 = not-paid, 1 = paid, 2 = refunded
    };

    const { data: ticketData, error: ticketInsertError } = await supabase
      .from("tickets")
      .upsert([newTicket]);

    const { data: paymentData, error: paymentInsertError } = await supabase
      .from("payments")
      .insert([newPayment]);

    if (ticketInsertError) {
      console.log(ticketInsertError);
      return NextResponse.json({ message: "Internal server error" });
    }

    if (paymentInsertError) {
      console.log(paymentInsertError);
      return NextResponse.json({ message: "Internal server error" }
      );
    }

    // Respond as needed
    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
