"use client";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import clearCachesByServerAction from "@/lib/revalidate";
import { Event } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { ClipboardCopy } from "lucide-react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

declare const payhere: any;

// Define the schema
const TicketsRegistrationSchema = z.object({
  name: z
    .string()
    .min(2, "You must enter a name")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email(),
  phone: z
    .string()
    .min(9, "You must enter a valid mobile number")
    .max(12, "You must enter a valid mobile number"),
  batch: z
    .string()
    .min(2, "You must enter a batch")
    .max(15, "Batch must be less than 15 characters"),
  mealType: z.enum(["1", "2", "3"]).optional(),
  paymentMethod: z.enum(["card", "cash"]).optional(),
});

type TicketsRegistrationSchemaType = z.infer<typeof TicketsRegistrationSchema>;

interface BuyTicketFormProps {
  eventData: Event;
  hash: string;
  ticketId: string;
}

const BuyTicketForm: React.FC<BuyTicketFormProps> = ({
  eventData,
  hash,
  ticketId,
}) => {
  const { toast } = useToast();
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [paymentOrderId, setPaymentOrderId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const form = useForm<TicketsRegistrationSchemaType>({
    resolver: zodResolver(TicketsRegistrationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      batch: "",
      mealType: undefined,
      paymentMethod: undefined,
    },
  });

  const handleCopy = (orderId: string) => {
    navigator.clipboard.writeText(orderId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  async function saveTicket(
    data: TicketsRegistrationSchemaType,
    paymentMethod: 1 | 2 | null
  ) {
    // Save the ticket to the database
    const ticketStatus = eventData.ticket_price === 0 ? 1 : 0;
    try {
      const supabase = createClient();

      let newTicket = {};
      if (paymentMethod === 2) {
        // If the payment method is card, don't pass the status
        newTicket = {
          _ticket_id: ticketId,
          _name: data.name,
          _email: data.email,
          _mobile: data.phone,
          _meal_type: data.mealType ? parseInt(data.mealType) : null,
          _payment_method: paymentMethod || null,
          _status: null, // Pass null to omit status
          _event_id: eventData.id,
          _event_name: eventData.name,
          _event_image: eventData.image,
        };
      } else {
        newTicket = {
          _ticket_id: ticketId,
          _name: data.name,
          _email: data.email,
          _mobile: data.phone,
          _meal_type: data.mealType ? parseInt(data.mealType) : null,
          _payment_method: paymentMethod || null,
          _status: ticketStatus, // Pass the status value
          _event_id: eventData.id,
          _event_name: eventData.name,
          _event_image: eventData.image,
        }
      }

      const { data: ticketData, error: insertError } = await supabase.rpc(
        "process_ticket_purchase",
        newTicket
      );

      if (insertError) {
        console.error("Error adding ticket:", insertError.message);
        setError("Sorry, we couldn't create your ticket");
        // Show error toast
        toast({
          title: "Error",
          description: "Sorry, we couldn't create your ticket",
          type: "foreground",
        });
        return;
      } else {
        clearCachesByServerAction(`/events/${eventData.slug}`);
        router.push(`/events/${eventData.slug}/buy/success?ticket=${ticketId}`);
      }
    } catch (error) {
      console.error("Error adding ticket:", error);
      // Show error toast
      toast({
        title: "Error",
        description: "Sorry, Something went wrong while creating your ticket",
        type: "foreground",
      });
    }
  }

  async function onSubmit(values: TicketsRegistrationSchemaType) {
    // ✅ This will be type-safe and validated.
    //console.log(values);

    // if the event is free, no need to proceed with the payment
    if (eventData.ticket_price === 0) {
      //console.log("Free event");
      await saveTicket(values, null);
      return;
    }

    if (values.paymentMethod === "cash") {
      //console.log("Cash payment");
      await saveTicket(values, 1);
      return;
    }

    // payhere payment gateway
    payhere.onCompleted = function onCompleted(ticketId: string) {
      console.log("Payment completed. OrderID:" + ticketId);
      setPaymentOrderId(ticketId);
      saveTicket(values, 2);
    };

    payhere.onDismissed = function onDismissed() {
      console.log("Payment dismissed");
    };

    payhere.onError = function onError(error: any) {
      console.log("Error:" + error);
      toast({
        title: "Error",
        description:
          "Sorry, Something went wrong while processing your payment",
        type: "foreground",
      });
    };

    // payment variables
    const payment = {
      sandbox: process.env.NEXT_PUBLIC_PAYHERE_SANDBOX,
      merchant_id: process.env.NEXT_PUBLIC_PAYHERE_MERCHANT_ID,
      return_url: process.env.NEXT_PUBLIC_PAYHERE_RETURN_URL,
      cancel_url: process.env.NEXT_PUBLIC_PAYHERE_CANCEL_URL,
      notify_url: process.env.NEXT_PUBLIC_PAYHERE_NOTIFY_URL,
      order_id: ticketId,
      items: eventData.name + " Ticket",
      amount: Number(
        eventData.ticket_price + eventData.ticket_price * 0.05
      ).toFixed(2),
      currency: "LKR",
      first_name: values.name.split(" ")[0],
      last_name: values.name.split(" ")[1] || "",
      email: values.email,
      phone: values.phone,
      address: "",
      city: "Galle",
      country: "Sri Lanka",
      hash: hash,
      custom_1: eventData.created_by,
      custom_2: eventData.ticket_price,
    };
    console.log(payment)
    setPaymentOrderId(null);
    //open payhere's payment selection
    payhere.startPayment(payment);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 md:px-4"
        >
          {
            // Show the error message
            error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                {error}
                <br />
                {paymentOrderId && (
                  <div className="items-center space-x-2">
                    Please contact the organizer with the order ID:{" "}
                    <div className="flex">
                      <span
                        className="bg-black/40 text-white px-3 text-sm py-1 rounded-lg cursor-pointer"
                        title="Order ID"
                        onClick={() => handleCopy(paymentOrderId)}
                      >
                        {paymentOrderId}
                      </span>
                      {!copied && (
                        <ClipboardCopy
                          size={24}
                          className="cursor-pointer text-slate-950 my-auto"
                          onClick={() => handleCopy(paymentOrderId)}
                        />
                      )}
                      {copied && (
                        <span className="text-slate-950 my-auto text-sm ml-2">
                          Copied!
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          }
          <div className="grid grid-cols-2 gap-2">
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input id="name" placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="batch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Batch</FormLabel>
                    <FormControl>
                      <Input id="batch" placeholder="GAHDSE231F" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input id="email" placeholder="john@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input id="phone" placeholder="0712345678" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {eventData.meal_provides && (
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="mealType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meal Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        id="mealType"
                        {...field}
                        onValueChange={field.onChange}
                        value={field.value || ""}
                      >
                        <div className="flex space-x-4">
                          <Label
                            htmlFor="non-veg"
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem id="non-veg" value="1" />
                            <span>Non-Veg</span>
                          </Label>
                          <Label
                            htmlFor="veg"
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem id="veg" value="2" />
                            <span>Veg</span>
                          </Label>
                          <Label
                            htmlFor="fish"
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem id="fish" value="3" />
                            <span>Fish</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
          {eventData.ticket_price > 0 && (
            <div className="grid gap-2 mt-2">
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <TooltipProvider>
                      <FormLabel>
                        Payment Method
                        <Tooltip>
                          <TooltipTrigger>
                            <InfoCircledIcon className="ml-2 w-4 h-4 text-gray-500" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              If you choose the cash option, please pay the
                              amount directly to an organizer.
                            </p>
                            <p>
                              Once your payment is received, your ticket will be
                              activated.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          id="paymentMethod"
                          {...field}
                          onValueChange={field.onChange}
                          value={field.value || ""}
                        >
                          <div className="flex space-x-4">
                            <Label
                              htmlFor="card"
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem id="card" value="card" />
                              <span>Card</span>
                            </Label>
                            <Label
                              htmlFor="cash"
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem id="cash" value="cash" />
                              <span>Cash</span>
                            </Label>
                          </div>
                          <span className="text-sm text-gray-500">
                            Please note that all digital payments are subjected
                            to a 5% service charge.
                          </span>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </TooltipProvider>
                  </FormItem>
                )}
              />
            </div>
          )}
          <Button type="submit" variant="outline" className="mt-3">
            CheckOut
          </Button>
        </form>
      </Form>
      <Script
        type="text/javascript"
        src="https://www.payhere.lk/lib/payhere.js"
      ></Script>
    </>
  );
};
export default BuyTicketForm;
