"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type CandyButtonVariant = "default" | "white";

export interface CandyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  target?: string;
  rel?: string;
  variant?: CandyButtonVariant;
}

const candyBaseClass =
  "relative overflow-hidden font-semibold text-base leading-[22px] tracking-[0.02em] " +
  "rounded-xl cursor-pointer transition-all duration-200 ease-out " +
  "active:scale-95 inline-flex items-center justify-center";

const candyVariantClass: Record<CandyButtonVariant, string> = {
  default:
    "border border-[#54A1FD] bg-[radial-gradient(95%_60%_at_50%_75%,#005FD6_0%,#209BFF_100%)] " +
    "px-9 py-3 text-white shadow-sm active:rotate-1 hover:brightness-110 " +
    "after:pointer-events-none after:absolute after:top-px after:right-[10%] after:h-px after:w-[60%] " +
    "after:bg-linear-to-r after:from-transparent after:via-white/50 after:to-transparent",
  white:
    "border border-zinc-200 bg-[radial-gradient(95%_60%_at_50%_75%,#d4d4d8_0%,#f4f4f5_48%,#ffffff_100%)] " +
    "text-zinc-600 shadow-sm active:rotate-0 hover:brightness-[1.03]",
};

export function CandyButton({
  className,
  children = "Candy Button",
  href,
  target,
  rel,
  variant = "default",
  ...props
}: CandyButtonProps) {
  const classes = cn(candyBaseClass, candyVariantClass[variant], className);

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default CandyButton;
