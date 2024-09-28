import HeaderFilter from "./components/filter/header";
import SheetSidebar from "./components/filter/sheetSidebar";
import SidebarFilter from "./components/filter/sidebar";
import Header from "./components/header";
import Products from "./components/products";

export default function Ecommerce() {
  return (
    <div>
      <Header isDetail={false} />

      <div className="flex flex-col items-center justify-center w-full border-t-[1.5px] border-t-gray-600 p-3 border-b-[1.5px] border-b-gray-600 relative">
        <SheetSidebar />
        <HeaderFilter />
      </div>

      <div className="grid grid-cols-12 h-full  ">
        <SidebarFilter isSheet={false} />
        <Products />
      </div>
    </div>
  );
}
