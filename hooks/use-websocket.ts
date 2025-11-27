"use client";

import { useEffect, useRef, useCallback } from "react";
import { useAppDispatch } from "@/lib/store/hooks";
import { updatePrice } from "@/lib/store/slices/tokenSlice";
import type { PriceUpdate } from "@/lib/types";

/**
 * Mock WebSocket service for real-time price updates
 * In production, this would connect to a real WebSocket server
 */
class MockWebSocketService {
  private callbacks: Set<(update: PriceUpdate) => void> = new Set();
  private intervalId: NodeJS.Timeout | null = null;
  private tokenIds: string[] = [];

  connect(tokenIds: string[]) {
    this.tokenIds = tokenIds;
    this.startMockUpdates();
  }

  disconnect() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.callbacks.clear();
  }

  subscribe(callback: (update: PriceUpdate) => void) {
    this.callbacks.add(callback);
    return () => {
      this.callbacks.delete(callback);
    };
  }

  private startMockUpdates() {
    // Simulate WebSocket updates every 2-5 seconds
    this.intervalId = setInterval(() => {
      if (this.tokenIds.length === 0) return;

      // Randomly update 1-3 tokens per interval
      const numUpdates = Math.floor(Math.random() * 3) + 1;
      const shuffled = [...this.tokenIds].sort(() => Math.random() - 0.5);

      for (let i = 0; i < numUpdates && i < shuffled.length; i++) {
        const tokenId = shuffled[i];
        const priceChange = (Math.random() - 0.5) * 0.1; // ±5% change
        const currentPrice = Math.random() * 1000 + 10;
        const newPrice = currentPrice * (1 + priceChange);

        const update: PriceUpdate = {
          tokenId,
          price: newPrice,
          timestamp: Date.now(),
        };

        this.callbacks.forEach((callback) => callback(update));
      }
    }, 2000 + Math.random() * 3000);
  }
}

const mockWebSocketService = new MockWebSocketService();

/**
 * Custom hook for WebSocket price updates
 */
export function useWebSocket(tokenIds: string[]) {
  const dispatch = useAppDispatch();
  const isConnectedRef = useRef(false);

  const handlePriceUpdate = useCallback(
    (update: PriceUpdate) => {
      dispatch(updatePrice({ tokenId: update.tokenId, price: update.price }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (tokenIds.length === 0) return;

    if (!isConnectedRef.current) {
      mockWebSocketService.connect(tokenIds);
      isConnectedRef.current = true;
    }

    const unsubscribe = mockWebSocketService.subscribe(handlePriceUpdate);

    return () => {
      unsubscribe();
      if (isConnectedRef.current) {
        mockWebSocketService.disconnect();
        isConnectedRef.current = false;
      }
    };
  }, [tokenIds, handlePriceUpdate]);

  return {
    isConnected: isConnectedRef.current,
  };
}

