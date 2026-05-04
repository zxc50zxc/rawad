import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function BentoGrid({ children, className = "" }: Props) {
  return (
    <div
      className={`grid auto-rows-[minmax(160px,auto)] grid-cols-1 gap-4 md:grid-cols-6 ${className}`}
    >
      {children}
    </div>
  );
}
