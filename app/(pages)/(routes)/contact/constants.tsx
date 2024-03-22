import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "Name is required!"),
  phone: z.string().min(10, "Enter a valid phone number").max(12),
  email: z.string().email(),
  subject: z.string().min(3, "Subject is required!"),
  message: z.string()!,
});
