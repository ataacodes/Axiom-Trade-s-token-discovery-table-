import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Token, SortConfig } from "@/lib/types";

interface TokenState {
  tokens: Token[];
  filteredTokens: Token[];
  sortConfig: SortConfig | null;
  selectedCategory: "all" | "new-pairs" | "final-stretch" | "migrated";
  searchQuery: string;
}

const initialState: TokenState = {
  tokens: [],
  filteredTokens: [],
  sortConfig: null,
  selectedCategory: "all",
  searchQuery: "",
};

const tokenSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<Token[]>) => {
      state.tokens = action.payload;
      state.filteredTokens = action.payload;
    },
    updatePrice: (
      state,
      action: PayloadAction<{ tokenId: string; price: number }>
    ) => {
      const { tokenId, price } = action.payload;
      const token = state.tokens.find((t) => t.id === tokenId);
      if (token) {
        token.previousPrice = token.price;
        token.price = price;
        const change = price - token.previousPrice;
        token.priceChange24h = change;
        token.priceChangePercent24h =
          (change / token.previousPrice) * 100 || 0;
      }
    },
    setSortConfig: (state, action: PayloadAction<SortConfig | null>) => {
      state.sortConfig = action.payload;
    },
    setSelectedCategory: (
      state,
      action: PayloadAction<"all" | "new-pairs" | "final-stretch" | "migrated">
    ) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    applyFilters: (state) => {
      let filtered = [...state.tokens];

      // Filter by category
      if (state.selectedCategory !== "all") {
        filtered = filtered.filter((token) => {
          if (state.selectedCategory === "new-pairs") return token.isNew;
          if (state.selectedCategory === "final-stretch")
            return token.isFinalStretch;
          if (state.selectedCategory === "migrated") return token.isMigrated;
          return true;
        });
      }

      // Filter by search query
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (token) =>
            token.name.toLowerCase().includes(query) ||
            token.symbol.toLowerCase().includes(query)
        );
      }

      // Apply sorting
      if (state.sortConfig) {
        filtered.sort((a, b) => {
          const aValue = a[state.sortConfig!.key];
          const bValue = b[state.sortConfig!.key];

          if (typeof aValue === "number" && typeof bValue === "number") {
            return state.sortConfig!.direction === "asc"
              ? aValue - bValue
              : bValue - aValue;
          }

          const aStr = String(aValue);
          const bStr = String(bValue);
          return state.sortConfig!.direction === "asc"
            ? aStr.localeCompare(bStr)
            : bStr.localeCompare(aStr);
        });
      }

      state.filteredTokens = filtered;
    },
  },
});

export const {
  setTokens,
  updatePrice,
  setSortConfig,
  setSelectedCategory,
  setSearchQuery,
  applyFilters,
} = tokenSlice.actions;

export default tokenSlice.reducer;

