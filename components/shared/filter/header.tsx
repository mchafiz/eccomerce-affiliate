"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductStore } from "@/store";
import { useShallow } from "zustand/react/shallow";
import { Category } from "@prisma/client";
import { useQueryParamsHook } from "@/hooks/useQueryParamHook";

export default function HeaderFilter({
  categories,
}: {
  categories: Array<Category>;
}) {
  const { products } = useProductStore(
    useShallow((state) => ({
      products: state.products,
      filters: state.filters,
      handleSetFilters: state.handleSetFilters,
      handleSetProducts: state.handleSetProducts,
    }))
  );

  const { addQueryParam } = useQueryParamsHook();

  // Function to handle filter changes
  const handleCategoryChange = async (category: string) => {
    const categoryId =
      categories.find((item) => item.id === parseInt(category))?.id || "";

    addQueryParam("category", categoryId.toString());
  };

  const handleCountChange = (count: string) => {
    addQueryParam("count", count);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <p className="text-sm text-textPrimary">{products.length} products</p>
      <Select onValueChange={handleCountChange}>
        <SelectTrigger className="w-[90px] px-2 m-0 h-8 bg-transparent border-0">
          <SelectValue placeholder="Show 5" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="5">Show 5</SelectItem>
            <SelectItem value="10">Show 10</SelectItem>
            <SelectItem value="15">Show 15</SelectItem>
            <SelectItem value="20">Show 20</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select onValueChange={handleCategoryChange}>
        <SelectTrigger className="w-[110px] px-2 m-0 h-8 bg-transparent border-0">
          <SelectValue placeholder="Best Selling" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id.toString()}>
                {category.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
