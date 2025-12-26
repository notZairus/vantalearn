"use server";

import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";
import { loginSchema, registerSchema } from "@/lib/schemas/auth";
import User from "@/models/user";
import connectDb from "@/lib/db";
import { redirect } from "next/navigation";

export const authenticate = async (prevState: unknown, formData: FormData) => {
  const data = Object.fromEntries(formData);
  const result = loginSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await signIn("credentials", {
      ...result.data,
      redirectTo: "/",
    });
  } catch (e) {
    if (e instanceof AuthError) {
      if (e.type == "CredentialsSignin") {
        return {
          error: "Invalid Credentials.",
        };
      } else {
        return {
          error: "Unknown Error.",
        };
      }
    }
    throw e;
  }
};

export async function register(pervState: unknown, formData: FormData) {
  await connectDb();

  const data = Object.fromEntries(formData);
  const result = registerSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const validatedData = result.data;

  if (validatedData.password !== validatedData.confirm_password) {
    return {
      error: "Passwords didn't match.",
    };
  }

  delete validatedData.confirm_password;

  const newUser = new User(validatedData);
  await newUser.save();

  return redirect("/login");
}
