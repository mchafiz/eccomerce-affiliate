import { create } from "zustand";

interface Category {
  id: number;
  name: string;
}

// Define the shape of the store
interface CategoryStore {
  categories: Category[];
  handleAddCategory: (category: Category) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  handleAddCategory: (category) =>
    set((state) => ({ categories: [...state.categories, category] })),
}));
