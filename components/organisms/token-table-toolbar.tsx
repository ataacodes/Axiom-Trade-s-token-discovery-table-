"use client";

import * as React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  setSelectedCategory,
  setSearchQuery,
  applyFilters,
} from "@/lib/store/slices/tokenSlice";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/molecules/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Toolbar component for filtering and searching tokens
 */
export function TokenTableToolbar() {
  const dispatch = useAppDispatch();
  const { selectedCategory, searchQuery } = useAppSelector(
    (state) => state.tokens
  );

  const handleCategoryChange = (category: "all" | "new-pairs" | "final-stretch" | "migrated") => {
    dispatch(setSelectedCategory(category));
    dispatch(applyFilters());
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
    dispatch(applyFilters());
  };

  const categories = [
    { value: "all" as const, label: "All Tokens" },
    { value: "new-pairs" as const, label: "New Pairs" },
    { value: "final-stretch" as const, label: "Final Stretch" },
    { value: "migrated" as const, label: "Migrated" },
  ];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search tokens..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="pl-9"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={selectedCategory === category.value ? "default" : "outline"}
            size="sm"
            onClick={() => handleCategoryChange(category.value)}
            className={cn(
              "transition-all",
              selectedCategory === category.value && "shadow-md"
            )}
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

