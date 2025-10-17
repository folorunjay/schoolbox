import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/shared/navbar";

export default function LandingPage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-8">
        {/* HERO CARD */}
        <Card className="max-w-lg w-full text-center border border-border bg-card shadow-md">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Welcome to Our Landing Page</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <p className="text-muted-foreground text-base">
              Experience the simplicity of{" "}
              <span className="text-primary font-semibold">shadcn/ui</span> — built for developers
              who love clean design and powerful customization.
            </p>

            <div className="flex gap-4">
              <Button size="lg" onClick={() => setCount((prev) => prev + 1)}>
                Clicked {count} times
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* FEATURE CARD */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6 w-full max-w-4xl">
          <Card className="border border-border bg-card">
            <CardHeader>
              <CardTitle>Fast Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Get started quickly with minimal setup and intuitive UI components.
              </p>
              <Button className="mt-4">Start Now</Button>
            </CardContent>
          </Card>

          <Card className="border border-border bg-card">
            <CardHeader>
              <CardTitle>Customizable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Tailor your design system with shadcn tokens for full control over your theme.
              </p>
              <Button className="mt-4" variant="outline">
                Explore Options
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
