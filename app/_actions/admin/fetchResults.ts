"use server";

import { supabase } from "@/app/_lib/supabase";

export async function getAllEvaluationResults() {
  const { data, error } = await supabase
    .from("evaluations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching dashboard data:", error.message);
    throw new Error(`Failed to retrieve results: ${error.message}`);
  }

  return data;
}
