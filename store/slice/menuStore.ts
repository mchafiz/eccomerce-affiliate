import { create } from "zustand";

interface Menu {
  id: number;
  title: string;
}

// Define the shape of the store
interface MenuStore {
  menus: Menu[];
  handleAddMenu: (menu: Menu) => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  menus: [],
  handleAddMenu: (menu) => set((state) => ({ menus: [...state.menus, menu] })),
}));
