"use client";

import * as React from "react";
import { useMemo } from "react";
import ErrorBoundary from "@/components/molecules/error-boundary";
import { TokenTable } from "./token-table";
import { TokenTableSkeleton } from "./token-table-skeleton";
import { TokenTableToolbar } from "./token-table-toolbar";
import { useTokens } from "@/hooks/use-tokens";
import { useWebSocket } from "@/hooks/use-websocket";

/**
 * Main token discovery table component
 * Wraps the table with error boundary and loading states
 */
export function TokenDiscoveryTable() {
  const { tokens, isLoading, error } = useTokens();
  const tokenIds = useMemo(() => tokens.map((t) => t.id), [tokens]);

  // Connect WebSocket for real-time updates
  useWebSocket(tokenIds);

  if (error) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-lg border bg-card p-8">
        <p className="text-destructive">Error loading tokens: {error}</p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="space-y-4">
        <TokenTableToolbar />
        {isLoading ? (
          <TokenTableSkeleton />
        ) : (
          <TokenTable tokens={tokens} />
        )}
      </div>
    </ErrorBoundary>
  );
}

