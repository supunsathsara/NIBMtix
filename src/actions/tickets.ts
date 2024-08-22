"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

const supabase = createClient();
export const toggleAttendance = async (id: String, attendance: number) => {
  attendance = attendance === 1 ? 0 : 1;

  let arrival = null;
  if (attendance === 1) {
    arrival = new Date().toISOString();
  }

  const { data, error } = await supabase
    .from("tickets")
    .update({ attendance: attendance, arrival: arrival })
    .eq("id", id)
    .select();
  if (error) {
    console.error(error);
    throw new Error("An error occurred while updating attendance");
  }

  console.log(data);

  revalidatePath("/dashboard/tickets");
};

export const toggleRefreshments = async (id: String, refreshments: number) => {
  console.log("toggleRefreshments", id);

  refreshments = refreshments === 1 ? 0 : 1;

  const { data, error } = await supabase
    .from("tickets")
    .update({ refreshments: refreshments })
    .eq("id", id)
    .select();
  if (error) {
    console.error(error);
    throw new Error("An error occurred while updating refreshments");
  }

  revalidatePath("/dashboard/tickets");
};

export const toggleLunch = async (id: String, lunch: number) => {
  lunch = lunch === 1 ? 0 : 1;

  const { data, error } = await supabase
    .from("tickets")
    .update({ lunch: lunch })
    .eq("id", id)
    .select();
  if (error) {
    console.error(error);
    throw new Error("An error occurred while updating lunch");
  }

  revalidatePath("/dashboard/tickets");
};
