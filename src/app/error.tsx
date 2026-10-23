"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
        <AlertTriangle className="h-8 w-8" />
      </div>
      <h2 className="text-2xl font-bold">Something went wrong</h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        An unexpected error occurred while loading this view. You can try refreshing.
      </p>
      <Button onClick={() => reset()} className="mt-6 gap-2">
        <RotateCcw className="h-4 w-4" />
        Try Again
      </Button>
    </div>
  );
}
