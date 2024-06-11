"use client";

import { AppProgressBar } from "next-nprogress-bar";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ProgressContext: FC<Props> = ({ children }) => {
  return (
    <>
      <AppProgressBar
        height="4px"
        color="#fef08a"
        options={{ showSpinner: false }}
        shallowRouting
      />
      {children}
    </>
  );
};
