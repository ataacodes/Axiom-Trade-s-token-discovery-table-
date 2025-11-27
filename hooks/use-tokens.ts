"use client";

import { useQuery } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setTokens, applyFilters } from "@/lib/store/slices/tokenSlice";
import { setLoading, setError } from "@/lib/store/slices/uiSlice";
import type { Token } from "@/lib/types";
import { useEffect } from "react";

/**
 * Mock data generator for tokens
 * In production, this would fetch from an API
 */
async function fetchTokens(): Promise<Token[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const categories: Token["category"][] = [
    "new-pairs",
    "final-stretch",
    "migrated",
  ];
  const symbols = [
    "ETH",
    "BTC",
    "SOL",
    "AVAX",
    "MATIC",
    "ADA",
    "DOT",
    "LINK",
    "UNI",
    "AAVE",
    "ATOM",
    "ALGO",
    "XTZ",
    "FIL",
    "THETA",
    "VET",
    "TRX",
    "EOS",
    "XLM",
    "XRP",
  ];

  return Array.from({ length: 50 }, (_, i) => {
    const basePrice = Math.random() * 1000 + 10;
    const priceChange = (Math.random() - 0.5) * 20;
    const category = categories[Math.floor(Math.random() * categories.length)];
    const symbol = symbols[i % symbols.length];

    return {
      id: `token-${i + 1}`,
      symbol,
      name: `${symbol} Token`,
      price: basePrice,
      previousPrice: basePrice - priceChange,
      priceChange24h: priceChange,
      priceChangePercent24h: (priceChange / (basePrice - priceChange)) * 100,
      volume24h: Math.random() * 10000000 + 100000,
      marketCap: Math.random() * 1000000000 + 10000000,
      liquidity: Math.random() * 5000000 + 50000,
      category,
      pairAddress: `0x${Math.random().toString(16).substr(2, 40)}`,
      createdAt: Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000,
      isNew: category === "new-pairs",
      isMigrated: category === "migrated",
      isFinalStretch: category === "final-stretch",
    };
  });
}

/**
 * Custom hook for fetching and managing tokens
 */
export function useTokens() {
  const dispatch = useAppDispatch();
  const { filteredTokens, sortConfig, selectedCategory, searchQuery } =
    useAppSelector((state) => state.tokens);
  const { isLoading, error } = useAppSelector((state) => state.ui);

  const { data, isLoading: queryLoading, error: queryError } = useQuery({
    queryKey: ["tokens"],
    queryFn: fetchTokens,
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  // Update Redux store when data changes
  useEffect(() => {
    if (data) {
      dispatch(setTokens(data));
      dispatch(applyFilters());
    }
  }, [data, dispatch]);

  // Update loading state
  useEffect(() => {
    dispatch(setLoading(queryLoading));
  }, [queryLoading, dispatch]);

  // Update error state
  useEffect(() => {
    dispatch(setError(queryError?.message || null));
  }, [queryError, dispatch]);

  // Re-apply filters when dependencies change
  useEffect(() => {
    dispatch(applyFilters());
  }, [sortConfig, selectedCategory, searchQuery, dispatch]);

  return {
    tokens: filteredTokens,
    isLoading: isLoading || queryLoading,
    error: error || queryError?.message || null,
  };
}

