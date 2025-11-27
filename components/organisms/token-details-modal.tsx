"use client";

import * as React from "react";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader,
  ModalTitle,
} from "@/components/molecules/modal";
import { PriceDisplay } from "@/components/atoms/price-display";
import { Badge } from "@/components/atoms/badge";
import { formatCurrency, formatCompactNumber } from "@/lib/utils";
import type { Token } from "@/lib/types";
import { ExternalLink, Calendar } from "lucide-react";
import { format } from "date-fns";

interface TokenDetailsModalProps {
  token: Token;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal component showing detailed token information
 */
export function TokenDetailsModal({
  token,
  isOpen,
  onClose,
}: TokenDetailsModalProps) {
  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="max-w-2xl">
        <ModalHeader>
          <div className="flex items-center gap-3">
            <ModalTitle className="text-2xl">{token.symbol}</ModalTitle>
            {token.isNew && <Badge variant="success">New</Badge>}
            {token.isFinalStretch && <Badge variant="warning">Final Stretch</Badge>}
            {token.isMigrated && <Badge variant="secondary">Migrated</Badge>}
          </div>
          <ModalDescription>{token.name}</ModalDescription>
        </ModalHeader>
        <div className="space-y-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Current Price</p>
              <PriceDisplay token={token} showChange={false} />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">24h Change</p>
              <p
                className={`text-2xl font-bold ${
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
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Volume (24h)</p>
              <p className="text-lg font-semibold">
                ${formatCompactNumber(token.volume24h)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Market Cap</p>
              <p className="text-lg font-semibold">
                ${formatCompactNumber(token.marketCap)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Liquidity</p>
              <p className="text-lg font-semibold">
                ${formatCompactNumber(token.liquidity)}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Previous Price</p>
              <p className="text-lg font-semibold">
                ${formatCurrency(token.previousPrice)}
              </p>
            </div>
          </div>

          <div className="space-y-2 border-t pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>
                Created: {format(new Date(token.createdAt), "PPp")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`https://etherscan.io/address/${token.pairAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                View on Etherscan
              </a>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}

