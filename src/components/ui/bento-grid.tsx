// bento-grid.tsx
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-full grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[22rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-start gap-2 rounded-xl border border-neutral-200 p-4 transition duration-200 hover:shadow-xl dark:shadow-none",
        // "border-white/20 bg-black",
        "bg-black/50 border-white/20 backdrop-blur-md",
        className,
      )}
    >
      {header}
      <div className="transition duration-200">
        <div className="flex items-center gap-2 mt-2 mb-2 transition-transform duration-200 group-hover/bento:translate-x-2">
          {icon}
          {title && ( // ⬅️ Only render if title exists
            <span className="font-sans font-bold text-xl md:text-xl text-neutral-200">
              {title}
            </span>
          )}
        </div>
        <div className="text-sm md:text-base font-normal text-neutral-300 text-justify leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
