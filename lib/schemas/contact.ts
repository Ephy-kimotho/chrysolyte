import { z } from "zod"
import { DISCIPLINES } from "@/lib"

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name." })
    .max(100),
  email: z.email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter a contact number." })
    .max(30),
  inquiry: z.enum(DISCIPLINES, {
    message: "Please choose what you're enquiring about.",
  }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please tell us a little more (10 characters min)." })
    .max(2000),
})

export type ContactValues = z.infer<typeof contactSchema>
