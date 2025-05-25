import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Divider } from "@heroui/divider";
import React from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-default-50 p-4">
      <div className="bg-content1 flex w-full max-w-sm flex-col gap-4 rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-medium">Welcome Back</h2>
        <Form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <Input
            isRequired
            label="Email"
            name="email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
          />
          <Input
            isRequired
            label="Password"
            name="password"
            placeholder="Enter your password"
            type="password"
            variant="bordered"
          />
          <Button className="w-full" color="primary" type="submit">
            Sign In
          </Button>
        </Form>
        <Divider />
        <p className="text-small text-center">
          Need an account?{" "}
          <Link href="#" size="sm">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
