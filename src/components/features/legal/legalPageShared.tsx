import { type ReactNode } from "react";
import { landingSectionSubheadingClass } from "@/components/ui/landing-section";

export const paragraphClass =
  "text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed mb-4";
export const headingClass = `${landingSectionSubheadingClass} text-zinc-900 font-inter-display mb-4`;
export const subheadingClass =
  "text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display font-semibold mb-2";
export const linkClass = "text-blue-600 hover:underline";
export const sectionClass =
  "mb-8 border-b border-dashed border-zinc-200 pb-8 md:mb-12 md:pb-12";
export const contactBoxClass =
  "border border-dashed border-zinc-200 bg-white/90 p-4 sm:p-6";
export const closingBoxClass =
  "border border-dashed border-zinc-200 bg-zinc-50/80 p-4 sm:p-6";

export const sectionDivider = (
  <div
    className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 border-t border-dashed border-zinc-200"
    aria-hidden
  />
);

export const ListItem = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start gap-3 text-sm sm:text-base md:text-lg text-zinc-700 font-inter-display leading-relaxed">
    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden />
    <span>{children}</span>
  </li>
);
