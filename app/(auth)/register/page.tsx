import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="w-full h-full bg-background">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md space-y-8 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-muted-foreground mt-2">
              Create your account to get started
            </p>
          </div>

          <form className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Email</Label>
              <Input type="email" placeholder="you@example.com" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">First Name</Label>
                <Input type="text" placeholder="John" required />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Last Name</Label>
                <Input type="text" placeholder="Smith" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Middle Name (optional)
              </Label>
              <Input type="text" placeholder="Doe" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Password</Label>
                <Input type="password" placeholder="••••••••" required />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Confirm Password</Label>
                <Input type="password" placeholder="••••••••" required />
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
