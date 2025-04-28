import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ExpandableText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.matchMedia("(max-width: 639px)").matches;
      setIsMobile(mobile);

      // Reset expanded if switching from mobile to desktop
      if (!mobile) {
        setExpanded(false);
      }
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "text-sm font-normal text-neutral-300 leading-relaxed",
          !expanded && "line-clamp-12"
        )}
      >
        {children}
      </div>

      {/* Toggle button – shown only on mobile */}
      {isMobile && (
        <div className="mt-1">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-400 underline text-sm"
          >
            {expanded ? "See less" : "See more"}
          </button>
        </div>
      )}
    </div>
  );
};