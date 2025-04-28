import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconBadge,
} from "@tabler/icons-react";

export const Modal = ({
  open,
  onClose,
  image,
  description,
}: {
  open: boolean;
  onClose: () => void;
  image: React.ReactNode;
  description: React.ReactNode;
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [onClose]);

  if (!hasMounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
          <motion.div
            className="bg-neutral-900/20 backdrop-blur-lg rounded-2xl shadow-2xl max-w-4xl w-full mx-4 p-6 flex flex-col md:flex-row relative border border-white/10 text-white"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 250, damping: 25, duration: 0.6 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white hover:text-neutral-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full md:w-1/2 flex justify-center items-center md:px-6 md:py-6 md:min-h-[350px]">
                {image}
            </div>

            <div className="w-full md:w-1/2 px-2">
              {/* Icon + Title */}
              <div className="flex items-center gap-2 mb-3">
                <IconBadge className="h-6 w-6 text-neutral-400" />
                <h2 className="text-xl font-semibold text-white">Bhiman Kumar Baghel</h2>
              </div>

              {/* Description */}
              <div className="text-sm leading-relaxed text-white/90">
                {description}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};