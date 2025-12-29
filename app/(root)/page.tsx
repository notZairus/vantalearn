"use server";

import { logout } from "@/actions/auth.actions";

async function page() {
  return <div onClick={logout}>Home </div>;
}

export default page;
