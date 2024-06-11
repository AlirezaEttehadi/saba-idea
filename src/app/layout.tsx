import type { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

import { NextUIContext } from "@saba-idea/context/next-ui.context";
import { ProgressContext } from "@saba-idea/context/progress.context";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
  src: [
    {
      path: "../fonts/Shabnam/Shabnam-Thin-FD.woff2",
      weight: "100",
    },
    {
      path: "../fonts/Shabnam/Shabnam-Light-FD.woff2",
      weight: "300",
    },
    {
      path: "../fonts/Shabnam/Shabnam-FD.woff2",
      weight: "400",
    },
    {
      path: "../fonts/Shabnam/Shabnam-Medium-FD.woff2",
      weight: "500",
    },
    {
      path: "../fonts/Shabnam/Shabnam-Bold-FD.woff2",
      weight: "700",
    },
  ],
});

export const metadata: Metadata = {
  title: "تماشای آنلاین فیلم و سریال",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>
        <NextUIContext>
          <ProgressContext>{children}</ProgressContext>
        </NextUIContext>
      </body>
    </html>
  );
}
