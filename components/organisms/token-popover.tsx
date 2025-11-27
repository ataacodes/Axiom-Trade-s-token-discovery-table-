"use client";

import * as React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/molecules/popover";
import { formatCurrency, formatCompactNumber } from "@/lib/utils";
import type { Token } from "@/lib/types";

interface TokenPopoverProps {
  token: Token;
  children: React.ReactNode;
}

/**
 * Popover component showing quick token information
 */
export function TokenPopover({ token, children }: TokenPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild onClick={(e) => e.stopPropagation()}>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-80" onClick={(e) => e.stopPropagation()}>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg">{token.symbol}</h4>
            <p className="text-sm text-muted-foreground">{token.name}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Price</p>
              <p className="font-semibold">${formatCurrency(token.price)}</p>
            </div>
            <div>
              <p className="text-muted-foreground">24h Change</p>
              <p
                className={`font-semibold ${
                  token.priceChangePercent24h > 0
                    ? "text-priceUp"
                    : token.priceChangePercent24h < 0
                    ? "text-priceDown"
                    : "text-muted-foreground"
                }`}
              >
                {token.priceChangePercent24h > 0 ? "+" : ""}
                {token.priceChangePercent24h.toFixed(2)}%
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Volume 24h</p>
              <p className="font-semibold">
                ${formatCompactNumber(token.volume24h)}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Market Cap</p>
              <p className="font-semibold">
                ${formatCompactNumber(token.marketCap)}
              </p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

