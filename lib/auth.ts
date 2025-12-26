import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { users } from "./constants";

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
        const { email, password } = credentials;
        const user = users.find((u) => u.email === email);

        if (!user) return null;
        if (user && user.password !== password) return null;

        return user;
      },
    }),
  ],
});
