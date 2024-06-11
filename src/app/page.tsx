"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex items-center justify-center h-screen">
      <div className="flex items-center flex-col gap-4">
        <h1 className="text-yellow-400">به وبسایت فیلیمو خوش‌آمدید!</h1>
        <Button as={Link} variant="flat" href="/movies" color="warning">
          Go back home
        </Button>
      </div>
    </main>
  );
}
