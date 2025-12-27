"use server";

import { logout } from "@/actions/auth.actions";

async function page() {
  return <div onClick={logout}>Logout</div>;
}

export default page;
