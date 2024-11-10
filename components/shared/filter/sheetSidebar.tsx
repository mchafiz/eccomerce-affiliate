import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdFilterAlt } from "react-icons/md";
import SidebarFilter from "./sidebar";

const SheetSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="p-0 m-0 h-0 lg:hidden text-textPrimary font-medium absolute left-3 text-xl"
        >
          <MdFilterAlt />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetDescription className="flex flex-col items-start justify-center gap-2">
            <SidebarFilter isSheet />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SheetSidebar;
