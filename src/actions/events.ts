"use server";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

const supabase = createClient();

export const markEventAsDefault = async (id: string) => {
  const { data: session, error: sessionError } = await supabase.auth.getUser();
  if (sessionError) {
    console.error("Error getting session:", sessionError);
    return;
  }
  const { data, error } = await supabase.rpc("mark_event_as_default", {
    _event_id: id,
    _user_id: session.user.id,
  });

  if (error) {
    console.error("Error marking event as default:", error);
    return;
  }
  console.log("Event successfully marked as default");
  revalidatePath("/dashboard");
  revalidatePath("/dashboard/events");
  revalidatePath("/dashboard/tickets");
  revalidatePath("/dashboard/participants");
};
