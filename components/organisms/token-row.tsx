"use client";

import * as React from "react";
import { useState } from "react";
import { TableCell, TableRow } from "@/components/molecules/table";
import { PriceDisplay } from "@/components/atoms/price-display";
import { Badge } from "@/components/atoms/badge";
import { TokenDetailsModal } from "./token-details-modal";
import { TokenPopover } from "./token-popover";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/molecules/tooltip";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setHoveredTokenId } from "@/lib/store/slices/uiSlice";
import { formatCompactNumber, getPriceChangeColor } from "@/lib/utils";
import type { Token } from "@/lib/types";
import { ExternalLink, Info } from "lucide-react";

interface TokenRowProps {
  token: Token;
}

/**
 * Individual token row component with hover effects and interactions
 */
export const TokenRow = React.memo<TokenRowProps>(({ token }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const hoveredTokenId = useAppSelector((state) => state.ui.hoveredTokenId);
  const isHovered = hoveredTokenId === token.id;

  const handleMouseEnter = () => {
    dispatch(setHoveredTokenId(token.id));
  };

  const handleMouseLeave = () => {
    dispatch(setHoveredTokenId(null));
  };

  const priceColor = getPriceChangeColor(token.priceChangePercent24h);

  return (
    <>
      <TableRow
        className="transition-colors cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsModalOpen(true)}
      >
        <TableCell>
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{token.symbol}</span>
                {token.isNew && (
                  <Badge variant="success" className="text-xs">
                    New
                  </Badge>
                )}
                {token.isFinalStretch && (
                  <Badge variant="warning" className="text-xs">
                    Final Stretch
                  </Badge>
                )}
                {token.isMigrated && (
                  <Badge variant="secondary" className="text-xs">
                    Migrated
                  </Badge>
                )}
              </div>
              <span className="text-xs text-muted-foreground">{token.name}</span>
            </div>
            <TokenPopover token={token}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className={`transition-opacity ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Info className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View token details</p>
                </TooltipContent>
              </Tooltip>
            </TokenPopover>
          </div>
        </TableCell>
        <TableCell className="text-right">
          <PriceDisplay token={token} />
        </TableCell>
        <TableCell className="text-right">
          <span className={`font-medium price-transition ${priceColor}`}>
            {token.priceChangePercent24h > 0 ? "+" : ""}
            {token.priceChangePercent24h.toFixed(2)}%
          </span>
        </TableCell>
        <TableCell className="text-right">
          <span className="text-sm">${formatCompactNumber(token.volume24h)}</span>
        </TableCell>
        <TableCell className="text-right">
          <span className="text-sm">${formatCompactNumber(token.marketCap)}</span>
        </TableCell>
        <TableCell className="text-right">
          <span className="text-sm">${formatCompactNumber(token.liquidity)}</span>
        </TableCell>
        <TableCell className="text-right">
          <div className="flex items-center justify-end gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={`https://etherscan.io/address/${token.pairAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1 hover:bg-muted rounded transition-colors"
                >
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>View on Etherscan</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TableCell>
      </TableRow>
      <TokenDetailsModal
        token={token}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
});

TokenRow.displayName = "TokenRow";

