"use server";

import connectDb from "@/lib/db";
import { IUser } from "@/lib/global";
import User from "@/models/user";

export const getUserByEmail = async (email: string) => {
  await connectDb();

  const user = await User.findOne({ email: email });

  if (!user) throw new Error("no user found!");

  return {
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    middleName: user.middleName,
  } as IUser;
};
