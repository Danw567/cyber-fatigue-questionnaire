"use server";

import { supabase } from "../_lib/supabase";

export interface AssessmentPayload {
  action: number;
  advice: number;
  attitudinal: number;
  cognitive: number;
}

export async function submitCyfaAssessment(data: AssessmentPayload) {
  const dbRow = {
    action_avg: data.action,
    advice_avg: data.advice,
    attitudinal_avg: data.attitudinal,
    cognitive_avg: data.cognitive,
  };

  const { error } = await supabase.from("evaluations").insert([dbRow]);

  if (error) {
    console.error("Database write error:", error.message);
    throw new Error(error.message);
  }

  return { success: true };
}
