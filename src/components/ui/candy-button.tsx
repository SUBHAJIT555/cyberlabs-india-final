"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CandyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function CandyButton({
  className,
  children = "Candy Button",
  ...props
}: CandyButtonProps) {
  return (
    <button
      className={cn(
        "relative text-white font-semibold text-base leading-[22px] tracking-[0.02em]",
        "px-9 py-3 rounded-xl cursor-pointer transition-all duration-200 ease-out",
        "border border-[#54A1FD] bg-[radial-gradient(95%_60%_at_50%_75%,#005FD6_0%,#209BFF_100%)]",
        "shadow-sm",
        "active:scale-95 active:rotate-1",
        "after:absolute after:top-px after:right-[10%] after:h-px after:w-[60%]",
        "after:bg-linear-to-r after:from-transparent after:via-white/50 after:to-transparent",
        "hover:brightness-110",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default CandyButton;
