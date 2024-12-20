// /types/product.ts
export interface Filters {
  category?: number | null;
  tags?: string;
  count?: number;
  brand?: string;
}

// /types/index.ts (optional)
export * from "./filters"; // Re-export for easier imports
