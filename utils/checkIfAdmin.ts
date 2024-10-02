// This function, checkIfAdmin, checks if the currently authenticated user has an "admin" role.
"use server";

import { createClient } from "./supabase/server";

export const checkIfAdmin = async () => {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const authId = user?.id;

  const profile = await supabase
    .from("profiles")
    .select("*")
    .eq("id", authId)
    .single();

  if (profile?.data?.role !== "admin") {
    return false;
  }
  return true;
};
