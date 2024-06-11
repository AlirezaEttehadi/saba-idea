import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-grow my-36 lg:my-52 flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-8">
        <h1 className="lg:text-4xl text-xl font-extrabold text-white tracking-tight sm:text-5xl">
          صفحه مورد نظر پیدا نشد
        </h1>
        <p className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">
          خطای ۴۰۴
        </p>
        <Button
          as={Link}
          className="mt-6"
          variant="flat"
          href="/"
          color="warning"
        >
          Go back home
        </Button>
      </div>
    </main>
  );
}
