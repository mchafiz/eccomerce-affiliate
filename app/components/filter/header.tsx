import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeaderFilter = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <p className="text-sm text-textPrimary">302 products</p>
      <Select>
        <SelectTrigger className="w-[90px] px-2 m-0 h-8 bg-transparent border-0">
          <SelectValue placeholder="5 Products" />
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
            <SelectItem value="apple">Best Selling</SelectItem>
            <SelectItem value="banana">Trending</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default HeaderFilter;
