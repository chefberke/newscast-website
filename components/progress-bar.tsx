"use client";

import { AppProgressBar } from "next-nprogress-bar";

interface ProgressBarProps {
  height?: string;
  color?: string;
  options?: {
    showSpinner?: boolean;
  };
  shallowRouting?: boolean;
}

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <AppProgressBar
      height="2px"
      color="#ffffff"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
