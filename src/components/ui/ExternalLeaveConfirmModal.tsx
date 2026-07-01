"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Portal from "@/components/ui/Portal";
import { CandyButton } from "@/components/ui/candy-button";
import { SectionEyebrow } from "@/components/ui/landing-section";
import { assetSrc } from "@/lib/utils";
import cyberlabsIcon from "@/assets/img/logo/Icon-01.svg";

type ExternalLeaveConfirmModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message: string;
  destination?: string;
  confirmLabel?: string;
  cancelLabel?: string;
};

export function ExternalLeaveConfirmModal({
  open,
  onClose,
  onConfirm,
  title = "You're leaving our main website",
  message,
  destination,
  confirmLabel = "Continue",
  cancelLabel = "Stay on Site",
}: ExternalLeaveConfirmModalProps) {
  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close confirmation"
              className="fixed inset-0 z-10060 cursor-default border-0 bg-white/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={onClose}
            />
            <div className="pointer-events-none fixed inset-0 z-10061 flex items-center justify-center p-4">
              <motion.div
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="external-leave-title"
                aria-describedby="external-leave-message"
                className="pointer-events-auto relative w-full max-w-md overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl shadow-zinc-900/10"
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative z-10 border-b border-dashed border-zinc-200 px-6 pb-5 pt-6 sm:px-8 sm:pt-7">
                  <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-lg p-1.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 sm:right-5 sm:top-5"
                    aria-label="Close"
                  >
                    <IoClose className="h-5 w-5" />
                  </button>

                  <div className="mx-auto mb-4 flex size-18 items-center justify-center rounded-full border border-zinc-200 bg-white ">
                    <img
                      src={assetSrc(cyberlabsIcon)}
                      alt="CYBERLABS"
                      className="size-10 object-contain"
                    />
                  </div>

                  <div className="flex justify-center">
                    <SectionEyebrow>Free Webinars</SectionEyebrow>
                  </div>

                  <h2
                    id="external-leave-title"
                    className="mt-4 text-center text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl"
                  >
                    {title}
                  </h2>
                </div>

                <div className="relative z-10 px-6 py-5 sm:px-8 sm:py-6">
                  <p
                    id="external-leave-message"
                    className="text-center text-sm leading-relaxed text-zinc-600 sm:text-base"
                  >
                    {message}
                  </p>

                  {destination && (
                    <p className="mt-4 rounded-lg border border-dashed border-zinc-200 bg-zinc-50 px-3 py-2.5 text-center text-xs font-medium text-zinc-700 sm:text-sm">
                      {destination}
                    </p>
                  )}

                  <div className="mt-6 flex flex-col gap-3 border-t border-dashed border-zinc-200 pt-6 sm:flex-row">
                    <CandyButton
                      type="button"
                      onClick={onClose}
                      className="w-full flex-1 rounded-lg! border-zinc-400 bg-[radial-gradient(95%_60%_at_50%_75%,#52525b_0%,#71717a_100%)] px-6 py-2.5 font-inter-display! text-sm font-medium shadow-none!"
                    >
                      {cancelLabel}
                    </CandyButton>
                    <CandyButton
                      type="button"
                      onClick={onConfirm}
                      className="w-full flex-1 rounded-lg! border-zinc-800 bg-[radial-gradient(95%_60%_at_50%_75%,#18181b_0%,#27272a_100%)] px-6 py-2.5 font-inter-display! text-sm font-semibold shadow-none!"
                    >
                      {confirmLabel}
                    </CandyButton>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}
