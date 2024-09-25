import { MdFilterAlt } from "react-icons/md";
import FilterComponent from "./components/filter";
import Header from "./components/header";
import Products from "./components/products";

export default function Ecommerce() {
  return (
    <div className="bg-bgCustom text-cyan-700 h-screen overflow-hidden">
      <Header />

      <div className="flex flex-col items-center justify-center w-full border-t-[1.5px] border-t-gray-600 p-3 border-b-[1.5px] border-b-gray-600 relative">
        <button className=" lg:hidden text-textPrimary font-medium absolute left-3 text-xl">
          <MdFilterAlt />
        </button>
        <div className="flex items-center justify-center gap-4">
          <p className="text-sm text-textPrimary">302 products</p>
          <p className="text-sm text-textPrimary">Show 10</p>
          <p className="text-sm text-textPrimary">Best Selling</p>
        </div>
      </div>

      <div className="grid grid-cols-12 h-full  ">
        <FilterComponent />
        <Products />
      </div>
    </div>
  );
}
