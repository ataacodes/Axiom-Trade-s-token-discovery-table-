"use client";

import { cn } from "@/lib/utils";

interface ShimmerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
}

function Shimmer({ className, width, height, ...props }: ShimmerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-muted",
        className
      )}
      style={{ width, height }}
      {...props}
    >
      <div
        className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{
          backgroundSize: "1000px 100%",
        }}
      />
    </div>
  );
}

export { Shimmer };

