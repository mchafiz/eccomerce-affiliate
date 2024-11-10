import { Filters } from "@/types";
import type { Products } from "@prisma/client";
import { create } from "zustand";

// Define the shape of the store

interface ProductStore {
  products: Products[];
  filters: Filters;
  handleSetFilters: (filters: Filters) => void;
  handleSetProducts: (products: Products[]) => void;
  handleAddProduct: (product: Products) => void;
}

// Create the store with typed state and actions
export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  filters: {
    category: null,
    brand: "",
    tags: "",
    count: 0,
  },
  handleSetProducts: (products) => set({ products }),
  handleSetFilters: (filters) => set({ filters }),
  handleAddProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
}));
