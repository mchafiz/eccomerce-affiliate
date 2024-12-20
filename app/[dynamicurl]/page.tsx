import HeaderFilter from "@/components/shared/filter/header";
import SheetSidebar from "@/components/shared/filter/sheetSidebar";
import Sidebar from "@/components/shared/filter/sidebar";
import Header from "@/components/shared/header";
import Products from "@/components/shared/products";
import { getCategories, getMenus, getProducts } from "@/lib/prisma";

export default async function Ecommerce() {
  const menus = await getMenus();
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <div>
      <Header isDetail={false} menus={menus} />

      <div className="flex flex-col items-center justify-center w-full border-t-[1.5px] border-t-gray-600 p-3 border-b-[1.5px] border-b-gray-600 relative">
        <SheetSidebar />
        <HeaderFilter categories={categories} />
      </div>

      <div className="grid grid-cols-12 min-h-screen  ">
        <Sidebar isSheet={false} />
        <Products products={products} />
      </div>
    </div>
  );
}
