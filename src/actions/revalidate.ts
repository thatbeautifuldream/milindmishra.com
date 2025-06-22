"use server";

import { revalidatePath } from "next/cache";
import { env } from "@/env";

export async function revalidatePathAction(path: string, secret: string) {
  try {
    // Validate secret
    if (!secret || secret !== env.REVALIDATE_SECRET) {
      return {
        success: false,
        message: "Invalid or missing secret key",
      };
    }

    // Revalidate the path
    revalidatePath(path);

    return {
      success: true,
      message: `Path ${path} revalidated successfully`,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    console.error("Revalidation error:", error);
    return {
      success: false,
      message: "Revalidation failed",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
