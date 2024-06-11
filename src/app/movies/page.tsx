"use client";

import { Suspense } from "react";

import Movies from "@saba-idea/components/movies";

export default function MoviesPage() {
  return (
    <Suspense>
      <Movies />
    </Suspense>
  );
}
