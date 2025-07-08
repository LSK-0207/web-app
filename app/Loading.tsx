import { Suspense } from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-brown-500">
        <Suspense fallback="Loading..." />
      </div>
    </div>
  );
}
