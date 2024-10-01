"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import SheetMenu from "../sheetMenu/index";
import InfoMenu from "./infoMenu";


export default function Header({
  isDetail,
  menus,
}: {
  isDetail: boolean;
  menus: Array<{ id: number; title: string }>;
}) {
  const [menu, setMenu] = useState("Sprayers");
  const router = useRouter();

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
          onClick={() => router.push("/")}
        />

        <div className=" hidden lg:flex flex-row items-center justify-center gap-3 pr-6 ">
          {menus.map((menuitem) => {
            return (
              <p
                key={menuitem.title}
                className={`text-sm text-textPrimary font-medium  cursor-pointer hover:text-textSecondary hover:font-medium  ${
                  menu === menuitem.title
                    ? "text-textSecondary"
                    : "text-textPrimary "
                }`}
                onClick={() => {
                  setMenu(menuitem.title);
                  router.push("/");
                }}
              >
                {menuitem.title}
              </p>
            );
          })}
        </div>

        <div className="flex items-center gap-4 pr-2">
          <MdOutlineFavoriteBorder className="text-textPrimary" />
        </div>
      </div>
      <hr className="h-px my-0 bg-gray-600 border-0 h-[1.5px]" />

      {!isDetail && <InfoMenu menu={menu} />}
    </div>
  );
};

