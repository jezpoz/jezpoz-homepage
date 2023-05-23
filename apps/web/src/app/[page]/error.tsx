"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function PageError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2>{error.message}</h2>
      <p>You can either:</p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <Link href="/">Go back home</Link>
    </div>
  );
}
