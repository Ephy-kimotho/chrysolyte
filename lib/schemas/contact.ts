import { z } from "zod";

export const INQUIRY_OPTIONS = [
    "Architecture",
    "Design",
    "Interior Design",
    "Landscaping",
    "Construction",
] as const;


export const contactSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(2, { message: "Please enter your full name." })
        .max(100),
    email: z
        .email({ message: "Please enter a valid email address." }),
    phone: z
        .string()
        .trim()
        .min(7, { message: "Please enter a contact number." })
        .max(30),
    inquiry: z.enum(INQUIRY_OPTIONS, {
        message: "Please choose what you're enquiring about.",
    }),
    message: z
        .string()
        .trim()
        .min(10, { message: "Please tell us a little more  10 characters min." })
        .max(2000),
});

export type ContactValues = z.infer<typeof contactSchema>;