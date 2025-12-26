"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

import { useActionState } from "react";
import { authenticate } from "@/actions/auth.actions";

const LoginPage = () => {
  const [state, action] = useActionState(authenticate, undefined);

  return (
    <div className="w-full h-full bg-background">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md space-y-8 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-muted-foreground mt-2">
              Enter your credentials to continue
            </p>
            {state?.error && (
              <p className="text-red-500 mt-4 text-xs">{state.error}</p>
            )}
          </div>

          <form className="space-y-6" action={action}>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Email</Label>
              <Input name="email" type="email" placeholder="you@example.com" />
              {state?.errors?.email && (
                <p className="text-xs text-red-400">{state.errors.email[0]}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Password</Label>
              <Input name="password" type="password" placeholder="••••••••" />
              {state?.errors?.password && (
                <p className="text-xs text-red-400">
                  {state.errors.password[0]}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Dont have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
