"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export const signOut = async () => {
console.log("signing out")
  const supabase = createClient();
  await supabase.auth.signOut();
  return redirect("/login");
};


