"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
  const pathname = usePathname();
  const menuFromUrl = pathname.split("/")[1];
  const menuFixed = menuFromUrl?.replace(/\s+/g, "-").toLowerCase();

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
          onClick={() =>
            router.push(`/${menus[0].title.replace(/\s+/g, "-").toLowerCase()}`)
          }
        />

        <div className=" hidden lg:flex flex-row items-center justify-center gap-3 pr-6 ">
          {menus.map((menuitem) => {
            const menuDatabase = menuitem.title
              .replace(/\s+/g, "-")
              .toLowerCase();
            return (
              <p
                key={menuitem.title}
                className={`text-sm text-textPrimary font-medium  cursor-pointer hover:text-textSecondary hover:font-medium  ${
                  menuDatabase === menuFromUrl
                    ? "text-textSecondary"
                    : "text-textPrimary "
                }`}
                onClick={() => {
                  router.push(`/${menuDatabase}`);
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

      {!isDetail && <InfoMenu menu={menuFixed.replaceAll("-", " ")} />}
    </div>
  );
}
