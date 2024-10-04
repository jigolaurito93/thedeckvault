"use server";

import { createClient } from "./supabase/server";

export async function compareUserID() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    return console.error(error);
  }
  const authId = data?.user?.id;
  const userProfile = await supabase
    .from("profiles")
    .select("*")
    .eq("id", authId)
    .single();
  return userProfile.data;
}
