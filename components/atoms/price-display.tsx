"use client";

import * as React from "react";
import { cn, formatCurrency, getPriceChangeColor } from "@/lib/utils";
import type { Token } from "@/lib/types";

interface PriceDisplayProps {
  token: Token;
  showChange?: boolean;
  className?: string;
}

export const PriceDisplay = React.memo<PriceDisplayProps>(
  ({ token, showChange = true, className }) => {
    const priceColor = getPriceChangeColor(token.priceChangePercent24h);
    const changeColor =
      token.priceChangePercent24h > 0
        ? "bg-priceUp/10 text-priceUp"
        : token.priceChangePercent24h < 0
        ? "bg-priceDown/10 text-priceDown"
        : "bg-muted text-muted-foreground";

    return (
      <div className={cn("flex flex-col gap-1", className)}>
        <span
          className={cn(
            "font-semibold price-transition",
            priceColor,
            className
          )}
        >
          ${formatCurrency(token.price)}
        </span>
        {showChange && (
          <span
            className={cn(
              "text-xs rounded px-1.5 py-0.5 w-fit price-transition",
              changeColor
            )}
          >
            {token.priceChangePercent24h > 0 ? "+" : ""}
            {token.priceChangePercent24h.toFixed(2)}%
          </span>
        )}
      </div>
    );
  }
);

PriceDisplay.displayName = "PriceDisplay";

