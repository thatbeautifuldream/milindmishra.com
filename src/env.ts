import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    REVALIDATE_SECRET: z.string().min(1),
    GROQ_API_KEY: z.string().min(1),
  },
  client: {
    // empty for now
  },
  experimental__runtimeEnv: {
    REVALIDATE_SECRET: process.env.REVALIDATE_SECRET,
    GROQ_API_KEY: process.env.GROQ_API_KEY,
  },
});
