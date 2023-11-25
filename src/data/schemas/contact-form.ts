import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name Required"),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
