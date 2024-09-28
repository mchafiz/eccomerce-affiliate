"use client";

import bebasSans from "@/app/utils/bebasnueue";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Products = () => {
  const router = useRouter();

  return (
    <main className="col-span-12 lg:col-span-9 max-h-full overflow-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            onClick={() => router.push("/detail")}
            key={index}
            className="bg-transparent p-4 border-b-[1.5px] border-[1.5px] border-orange-100 w-full cursor-pointer hover:bg-orange-200 transition-all ease-linear duration-300"
          >
            <Image
              className="h-44 w-full object-cover rounded-lg object-cover"
              src={`/product/sprayyer.png`}
              alt={`Product ${index + 1}`}
              width={300}
              height={300}
            />
            <div className="flex items-center mt-4 justify-between w-full">
              <span className="text-textSecondary">★ ★ ★ ★ ☆</span>
              <h2
                className={`text-xl font-semibold ${bebasSans.className} font-bold flex-1 text-right `}
              >
                Rp. 1.000.000
              </h2>
            </div>

            <h2
              className={`text-xl font-semibold ${bebasSans.className} font-bold `}
            >
              HD2000 BATTERY POWERED BACKPACK SPRAYER
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
