import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { NextUIContext } from "@saba-idea/context/next-ui.context";
import { ProgressContext } from "@saba-idea/context/progress.context";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "تماشای آنلاین فیلم و سریال",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIContext>
          <ProgressContext>{children}</ProgressContext>
        </NextUIContext>
      </body>
    </html>
  );
}
