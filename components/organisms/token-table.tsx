"use client";

import * as React from "react";
import { useMemo } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/molecules/table";
import { SortableHeader } from "@/components/molecules/sortable-header";
import { TokenRow } from "./token-row";
import { useSort } from "@/hooks/use-sort";
import type { Token } from "@/lib/types";
import { formatCompactNumber } from "@/lib/utils";

interface TokenTableProps {
  tokens: Token[];
}

/**
 * Main token table component with sorting and columns
 */
export const TokenTable = React.memo<TokenTableProps>(({ tokens }) => {
  const { sortConfig, handleSort } = useSort();

  const columns = useMemo(
    () => [
      { key: "symbol" as keyof Token, label: "Token", sortable: true },
      { key: "price" as keyof Token, label: "Price", sortable: true },
      {
        key: "priceChangePercent24h" as keyof Token,
        label: "24h Change",
        sortable: true,
      },
      { key: "volume24h" as keyof Token, label: "Volume", sortable: true },
      { key: "marketCap" as keyof Token, label: "Market Cap", sortable: true },
      { key: "liquidity" as keyof Token, label: "Liquidity", sortable: true },
    ],
    []
  );

  if (tokens.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center rounded-lg border bg-card">
        <p className="text-muted-foreground">No tokens found</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <SortableHeader
                  key={String(column.key)}
                  label={column.label}
                  sortKey={column.key}
                  sortConfig={sortConfig}
                  onSort={handleSort}
                  align={
                    ["price", "priceChangePercent24h", "volume24h", "marketCap", "liquidity"].includes(
                      String(column.key)
                    )
                      ? "right"
                      : "left"
                  }
                />
              ))}
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tokens.map((token) => (
              <TokenRow key={token.id} token={token} />
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="border-t px-4 py-3 text-sm text-muted-foreground">
        Showing {tokens.length} token{tokens.length !== 1 ? "s" : ""}
      </div>
    </div>
  );
});

TokenTable.displayName = "TokenTable";

