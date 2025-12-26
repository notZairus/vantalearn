"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { register } from "@/actions/auth.actions";

const RegisterPage = () => {
  const [state, action] = useActionState(register, undefined);

  return (
    <div className="w-full h-full bg-background">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md space-y-8 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-muted-foreground mt-2">
              Create your account to get started
            </p>
            {state?.error && (
              <p className="text-red-500 mt-4 text-xs">{state.error}</p>
            )}
          </div>

          <form action={action} className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              {state?.errors?.email && (
                <p className="text-xs text-red-500">{state.errors.email[0]}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">First Name</Label>
                <Input
                  name="firstName"
                  type="text"
                  placeholder="John"
                  required
                />
                {state?.errors?.firstName && (
                  <p className="text-xs text-red-500">
                    {state.errors.firstName[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Last Name</Label>
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Smith"
                  required
                />
                {state?.errors?.lastName && (
                  <p className="text-xs text-red-500">
                    {state.errors.lastName[0]}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Middle Name (optional)
              </Label>
              <Input name="middleName" type="text" placeholder="Doe" />
              {state?.errors?.middleName && (
                <p className="text-xs text-red-500">
                  {state.errors.middleName[0]}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Password</Label>
                <Input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
                {state?.errors?.password && (
                  <p className="text-xs text-red-500">
                    {state.errors.password[0]}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Confirm Password</Label>
                <Input
                  name="confirm_password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
                {state?.errors?.confirm_password && (
                  <p className="text-xs text-red-500">
                    {state.errors.confirm_password[0]}
                  </p>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
