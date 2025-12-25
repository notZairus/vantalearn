import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  return (
    <div className="w-full h-full bg-background">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md space-y-8 px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-muted-foreground mt-2">
              Enter your credentials to continue
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium">Email</Label>
              <Input type="email" placeholder="you@example.com" />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Password</Label>
              <Input type="password" placeholder="••••••••" />
            </div>

            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Dont have an account?{" "}
            <a href="/register" className="text-primary hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
