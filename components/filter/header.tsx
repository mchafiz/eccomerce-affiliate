import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCategories, getProducts } from "@/lib/prisma";

export default async function HeaderFilter() {
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <div className="flex items-center justify-center gap-4">
      <p className="text-sm text-textPrimary">{products.length} products</p>
      <Select>
        <SelectTrigger className="w-[90px] px-2 m-0 h-8 bg-transparent border-0">
          <SelectValue placeholder="Show 5" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Show 5</SelectItem>
            <SelectItem value="banana">Show 10</SelectItem>
            <SelectItem value="blueberry">Show 15</SelectItem>
            <SelectItem value="grapes">Show 20</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[110px] px-2 m-0 h-8 bg-transparent border-0">
          <SelectValue placeholder="Best Selling" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.name}>
                {category.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
