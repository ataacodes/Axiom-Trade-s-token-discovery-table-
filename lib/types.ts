/**
 * Token data structure
 */
export interface Token {
  id: string;
  symbol: string;
  name: string;
  price: number;
  previousPrice: number;
  priceChange24h: number;
  priceChangePercent24h: number;
  volume24h: number;
  marketCap: number;
  liquidity: number;
  category: TokenCategory;
  pairAddress: string;
  createdAt: number;
  isNew?: boolean;
  isMigrated?: boolean;
  isFinalStretch?: boolean;
}

/**
 * Token categories for filtering
 */
export type TokenCategory = "new-pairs" | "final-stretch" | "migrated";

/**
 * Sort configuration
 */
export interface SortConfig {
  key: keyof Token;
  direction: "asc" | "desc";
}

/**
 * Table column configuration
 */
export interface TableColumn {
  key: keyof Token | string;
  label: string;
  sortable: boolean;
  align?: "left" | "right" | "center";
  width?: string;
}

/**
 * WebSocket message types
 */
export interface PriceUpdate {
  tokenId: string;
  price: number;
  timestamp: number;
}

/**
 * Loading state types
 */
export type LoadingState = "idle" | "loading" | "success" | "error";

/**
 * Error boundary error structure
 */
export interface ErrorInfo {
  componentStack: string;
  error: Error;
}

