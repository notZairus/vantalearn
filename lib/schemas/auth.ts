import z from "zod";

export const signInSchema = z.object({
  email: z.string("Email is required").min(1, "Email is required"),
  password: z
    .string("Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});
