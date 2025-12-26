// middleware.ts
import { auth as middleware } from "@/lib/auth";
import { NextResponse } from "next/server";

export default middleware((req) => {
  const isLoggedIn = req.auth ? true : false;

  const protectedRoutes = ["/"];
  const publicRoutes = ["/login", "/register"];

  const {
    nextUrl: { pathname },
  } = req;

  // PUBLIC ROUTES
  if (isLoggedIn && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  //PROTECTED ROUTES
  if (!isLoggedIn && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return null;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
