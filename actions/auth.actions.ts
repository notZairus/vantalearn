"use server";

import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";
import { signInSchema } from "@/lib/schemas/auth";

export const authenticate = async (prevState: unknown, formData: FormData) => {
  const data = Object.fromEntries(formData);
  const result = signInSchema.safeParse(data);

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
