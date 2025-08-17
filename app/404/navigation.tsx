"use client";

import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();

  return (
    <div className="flex gap-4 mt-6">
      <button
        className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
        onClick={() => router.back()}
      >
        <IconArrowNarrowLeft />
        <span>Go back</span>
      </button>

      <button
        className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
        onClick={() => router.push("/")}
      >
        Take me home
      </button>
    </div>
  );
}
