"use server";

import { createClient } from "@/app/_utils/supabase/server";

export async function getCurrentUser() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return session;
}

export async function signUp(username: string, password: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email: username,
    password: password,
  });

  if (error) {
    console.error("Sign up failed:", error.message);
  } else {
    console.log("User created:", data.user);
  }
}

export async function signIn(username: string, password: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: username,
    password: password,
  });

  if (error) {
    console.error("Log in failed:", error.message);
  } else {
    console.log("Successfully Logged in:", data.user);
  }
}

export async function logOut() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("logOut failed:", error.message);
  }
}
