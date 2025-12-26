// middleware.ts
import { auth as middleware } from "@/lib/auth";

export default middleware((req) => {
  const isLoggedIn = !!req.auth;

  console.log("hello from middleware!");
  const { nextUrl } = req;

  const isApiAuthRoute = nextUrl.pathname.startsWith("/api/auth");
  const isPublicRoute = ["/login", "/register"].includes(nextUrl.pathname);
  const isProtectedRoute = nextUrl.pathname.startsWith("/dashboard");

  // 1. Allow API auth routes (needed for NextAuth to function)
  if (isApiAuthRoute) return null;

  // 2. Redirect logged-in users away from Login/Register
  if (isPublicRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/dashboard", nextUrl));
    }
    return null;
  }

  // 3. Redirect unauthenticated users to Login
  if (!isLoggedIn && isProtectedRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return null;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
