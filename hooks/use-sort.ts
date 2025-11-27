"use client";

import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setSortConfig, applyFilters } from "@/lib/store/slices/tokenSlice";
import type { Token } from "@/lib/types";

/**
 * Custom hook for table sorting
 */
export function useSort() {
  const dispatch = useAppDispatch();
  const sortConfig = useAppSelector((state) => state.tokens.sortConfig);

  const handleSort = useCallback(
    (key: keyof Token) => {
      let newDirection: "asc" | "desc" = "asc";

      if (sortConfig?.key === key) {
        // Toggle direction if same key
        newDirection = sortConfig.direction === "asc" ? "desc" : "asc";
      }

      dispatch(setSortConfig({ key, direction: newDirection }));
      dispatch(applyFilters());
    },
    [dispatch, sortConfig]
  );

  return {
    sortConfig,
    handleSort,
  };
}

