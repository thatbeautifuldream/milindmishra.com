import { z } from "zod";

export const slideSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  footer: z.string().optional(),
  image: z.string().optional(),
  ul: z.array(z.string()).optional(),
  ol: z.array(z.string()).optional(),
  code: z.string().optional(),
});

export type Slide = z.infer<typeof slideSchema>;
