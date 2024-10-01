"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/header";
import bebasSans from "../utils/bebasnueue";

const Detail = () => {
  const [size, setSize] = useState<string>("");
  const sizes = ["S", "M", "L", "XL"];
  return (
    <div>
      <Header isDetail menus={[]} />
      <div className="bg-bgCustom p-4 border-gray-600 w-full min-h-screen">
        <div className="grid grid-cols-12  mx-4 mt-8 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <Image
              src={`/product/sprayyer.png`}
              alt={`Product 1`}
              width={800}
              height={800}
            />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-col items-start justify-center w-full ">
              <h1 className={`${bebasSans.className} font-bold text-4xl `}>
                HD2000 BATTERY POWERED BACKPACK SPRAYER
              </h1>
              <div className="flex items-center mt-1 justify-start w-full gap-2">
                <div className="flex flex-row items-center justify-start gap-1">
                  <span className="text-textSecondary text-lg">★</span>
                  <span className="text-sm text-textPrimary">(4,9)</span>
                </div>
                <div className="border-r-[1.5px] h-4 bg-gray-600 " />
                <div className="flex flex-row items-center justify-start gap-1">
                  <span className="text-textPrimary text-sm font-bold">
                    9,3k
                  </span>
                  <span className="text-sm text-textPrimary">(4,9)</span>
                </div>
                <div className="border-r-[1.5px] h-4 bg-gray-600 " />
                <div className="flex flex-row items-center justify-start gap-1">
                  <span className="text-textPrimary text-sm font-bold">
                    9,3k
                  </span>
                  <span className="text-sm text-textPrimary">Reviews</span>
                </div>
                <div className="border-r-[1.5px] h-4 bg-gray-600 " />
                <div className="flex flex-row items-center justify-start gap-1">
                  <span className="text-textPrimary text-sm font-bold">
                    10k
                  </span>
                  <span className="text-sm text-textPrimary">Sold Out</span>
                </div>
              </div>
              <p
                className={`flex items-start font-bold text-4xl ${bebasSans.className} mt-2`}
              >
                Rp. 1.000.000
              </p>

              <p className={`font-normal flex gap-1`}>
                Color: <span className="font-bold"> Cream</span>
              </p>
              <p className={`font-normal flex gap-1`}>Size: </p>

              {/* Size selection badges */}
              <div className="flex flex-row items-center justify-start gap-2 mt-1">
                {sizes.map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    onClick={() => setSize(s)}
                    className={`font-bold text-md px-5 cursor-pointer ${
                      size === s
                        ? "bg-orange-400 text-white"
                        : "hover:bg-orange-400 hover:text-white"
                    }`}
                  >
                    {s}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col items-start justify-center gap-2 mt-4 w-full">
                <Button size="lg" className="w-[300px] rounded-3xl">
                  Buy Now
                </Button>
                <Button size="lg" className="w-[300px] rounded-3xl">
                  Add to Favorite
                </Button>
              </div>

              <div className="flex flex-col items-start justify-center gap-2 mt-8 w-full">
                <h1 className={`${bebasSans.className} font-bold text-2xl `}>
                  Description
                </h1>
                <p className="text-textPrimary text-md">{`The HD2000 Battery Powered Backpack Sprayer is a top-tier, high-performance sprayer designed to make large-scale spraying tasks more efficient and convenient. Engineered for both professional and personal use, this powerful sprayer combines advanced technology with ergonomic design to ensure ease of operation, durability, and consistent performance.

Key Features:
Battery-Powered Efficiency: The HD2000 sprayer is equipped with a long-lasting, rechargeable lithium-ion battery, eliminating the need for manual pumping. This feature allows users to work for extended periods without interruption, making it ideal for agricultural tasks, gardening, landscaping, and even pest control.

High Capacity: With a generous 4-gallon (15-liter) tank, the HD2000 is designed to cover large areas in a single fill, reducing the frequency of refills and maximizing productivity. The durable tank is made from high-quality materials to resist chemicals and withstand wear and tear over time.

Adjustable Nozzles: The sprayer comes with multiple nozzle options that allow users to switch between different spray patterns—fine mist, cone, or stream—depending on the task at hand. This versatility makes it suitable for a wide range of applications, from delicate plant care to robust weed killing.

Comfortable Backpack Design: The HD2000 features padded shoulder straps and an ergonomic harness system, making it comfortable to wear for extended periods. The backpack design distributes the weight evenly across the user’s back, reducing strain and allowing for greater mobility in the field or garden.

Powerful and Quiet Operation: Despite its powerful spraying capability, the HD2000 operates quietly, making it less disruptive in noise-sensitive environments. The battery-powered motor delivers a consistent, pressurized spray that ensures even application across all surfaces.

`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
