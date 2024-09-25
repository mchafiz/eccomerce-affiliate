"use client";
import bebasSans from "@/app/utils/bebasnueue";
import Image from "next/image";
import {
  MdMenu,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
} from "react-icons/md";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full px-5 gap-2 py-3">
        <button>
          <MdMenu className="text-textPrimary text-xl lg:hidden" />
        </button>
        <div className="flex justify-end items-center w-full gap-2">
          <p className="text-sm text-textPrimary font-medium">Blog</p>
          <p className="text-sm text-textPrimary font-medium">Support</p>
        </div>
      </div>
      <hr className="h-px my-0 bg-gray-600 border-0 h-[1.5px]" />
      <div className="flex items-center justify-between px-2 py-3">
        <Image
          src="/img/logo.png"
          alt="logo"
          width={120}
          height={30}
          className="cursor-pointer"
        />

        <div className=" hidden lg:flex flex-row items-center justify-center gap-3 ">
          <p className="text-sm text-textPrimary font-medium text-normal">
            Sprayers
          </p>
          <p className="text-sm text-textPrimary font-medium">
            Lawn & Garden Solutions
          </p>
          <p className="text-sm text-textPrimary font-medium">
            Growing Solutions
          </p>
          <p className="text-sm text-textPrimary font-medium">
            Cleaning Solutions
          </p>
          <p className="text-sm text-textPrimary font-medium">
            Concrete Solutions
          </p>
        </div>

        <div className="flex items-center gap-4 pr-2">
          <MdOutlineFavoriteBorder className="text-textPrimary" />
          <MdOutlineShoppingCart className="text-textPrimary" />
        </div>
      </div>
      <hr className="h-px my-0 bg-gray-600 border-0 h-[1.5px]" />
      <p
        className={`text-textPrimary font-extrabold text-8xl text-center my-10 ${bebasSans.className}`}
      >
        SPRAYERS
      </p>
    </div>
  );
};

export default Header;
