"use client";

import { FC, ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

export const NextUIContext: FC<Props> = ({ children }) => {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};
