"use client";
import bebasSans from "@/app/utils/bebasnueue";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import SheetMenu from "../sheetMenu/index";

const Header = () => {
  const [menu, setMenu] = useState("SPRAYERS");
  return (
    <div>
      <div className="flex justify-between items-center w-full px-5 gap-2 py-3">
        <SheetMenu />
        <div className="flex justify-end items-center w-full gap-4">
          <p className="text-sm text-textPrimary font-medium">Blog</p>
          <p className="text-sm text-textPrimary font-medium">Contact Us</p>
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

        <div className=" hidden lg:flex flex-row items-center justify-center gap-3 pr-6 ">
          <p
            className="text-sm text-textPrimary font-medium  cursor-pointer hover:text-textSecondary hover:font-medium"
            onClick={() => setMenu("SPRAYERS")}
          >
            Sprayers
          </p>
          <p
            className="text-sm text-textPrimary font-medium cursor-pointer hover:text-textSecondary hover:font-medium"
            onClick={() => setMenu("Lawn & Garden Solutions")}
          >
            Lawn & Garden Solutions
          </p>
          <p
            className="text-sm text-textPrimary font-medium cursor-pointer hover:text-textSecondary hover:font-medium"
            onClick={() => setMenu("Growing Solutions")}
          >
            Growing Solutions
          </p>
          <p
            className="text-sm text-textPrimary font-medium cursor-pointer hover:text-textSecondary hover:font-medium"
            onClick={() => setMenu("Cleaning Solutions")}
          >
            Cleaning Solutions
          </p>
          <p
            className="text-sm text-textPrimary font-medium cursor-pointer hover:text-textSecondary hover:font-medium"
            onClick={() => setMenu("Concrete Solutions")}
          >
            Concrete Solutions
          </p>
        </div>

        <div className="flex items-center gap-4 pr-2">
          <MdOutlineFavoriteBorder className="text-textPrimary" />
        </div>
      </div>
      <hr className="h-px my-0 bg-gray-600 border-0 h-[1.5px]" />
      <p
        className={`text-textPrimary font-extrabold text-8xl text-center my-10 ${bebasSans.className}`}
      >
        {menu}
      </p>
    </div>
  );
};

export default Header;
