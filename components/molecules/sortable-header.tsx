"use client";

import * as React from "react";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SortConfig } from "@/lib/types";
import type { Token } from "@/lib/types";

interface SortableHeaderProps {
  label: string;
  sortKey: keyof Token;
  sortConfig: SortConfig | null;
  onSort: (key: keyof Token) => void;
  align?: "left" | "right" | "center";
  className?: string;
}

export const SortableHeader = React.memo<SortableHeaderProps>(
  ({ label, sortKey, sortConfig, onSort, align = "left", className }) => {
    const isActive = sortConfig?.key === sortKey;
    const direction = isActive ? sortConfig.direction : null;

    const handleClick = () => {
      onSort(sortKey);
    };

    return (
      <th
        className={cn(
          "h-12 px-4 text-left align-middle font-medium text-muted-foreground cursor-pointer select-none hover:bg-muted/50 transition-colors",
          {
            "text-right": align === "right",
            "text-center": align === "center",
          },
          className
        )}
        onClick={handleClick}
      >
        <div
          className={cn("flex items-center gap-2", {
            "justify-end": align === "right",
            "justify-center": align === "center",
          })}
        >
          <span>{label}</span>
          <div className="flex flex-col">
            {direction === "asc" ? (
              <ArrowUp className="h-3 w-3 text-primary" />
            ) : direction === "desc" ? (
              <ArrowDown className="h-3 w-3 text-primary" />
            ) : (
              <ArrowUpDown className="h-3 w-3 opacity-50" />
            )}
          </div>
        </div>
      </th>
    );
  }
);

SortableHeader.displayName = "SortableHeader";

