import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "@/models/user";
import { compareHashedPassword } from "./helpers";
import connectDb from "./db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
        },
        password: {
          type: "password",
        },
      },
      authorize: async (credentials) => {
        await connectDb();
        const { email, password } = credentials;
        const user = await User.findOne({ email: email });

        if (!user) return null;

        if (!(await compareHashedPassword(password as string, user.password))) {
          return null;
        }

        return user;
      },
    }),
  ],
});
