import z from "zod";

export const loginSchema = z.object({
  email: z.string("Email is required").min(1, "Email is required"),
  password: z
    .string("Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const registerSchema = z.object({
  email: z.string("Email is required").min(1, "Email is required").trim(),
  firstName: z
    .string("first name is required")
    .trim()
    .min(2, "first name must be more than 8 characters"),
  lastName: z
    .string("last name is required")
    .trim()
    .min(2, "last name must be more than 8 characters"),
  middleName: z.string("middle name is required").trim().optional(),
  password: z
    .string("Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  confirm_password: z.string("password confirmation is required").optional(),
});
