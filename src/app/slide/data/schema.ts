import { z } from "zod";

export const slideSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  footer: z.string().optional(),
  image: z.string().optional(),
});

export type Slide = z.infer<typeof slideSchema>;
