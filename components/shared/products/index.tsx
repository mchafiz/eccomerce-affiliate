"use client";

import bebasSans from "@/lib/bebasnueue";
import { useProductStore } from "@/store";
import type { Products } from "@prisma/client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

const Products = ({ products }: { products: Array<Products> }) => {
  const router = useRouter();
  const pathname = usePathname();
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // Tidak ada digit desimal
      maximumFractionDigits: 0, // Tidak ada digit desimal
    }).format(amount);
  };

  const { handleSetProducts, products: productsCurrent } = useProductStore(
    useShallow((state) => ({
      products: state.products,
      handleSetProducts: state.handleSetProducts,
    }))
  );

  useEffect(() => {
    if (products.length > 0) {
      handleSetProducts(products);
    }
  }, [products]);

  return (
    <main className="col-span-12 lg:col-span-9 max-h-full overflow-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
        {productsCurrent.map((product) => (
          <div
            onClick={() => {
              const url = `${pathname}/product/${product.name
                .replace(" ", "-")
                .toLowerCase()}`;
              router.push(url);
            }}
            key={product.id}
            className="bg-transparent p-4 border-b-[1.5px] border-[1.5px] border-orange-100 w-full cursor-pointer hover:bg-orange-200 transition-all ease-linear duration-300"
          >
            <Image
              className="h-44 w-full object-cover rounded-lg object-cover"
              src={`${product.imageUrl}`}
              alt={`${product.name}`}
              width={300}
              height={300}
            />
            <div className="flex items-center mt-4 justify-between w-full">
              <span className="text-textSecondary">★ ★ ★ ★ ☆</span>
              <h2
                className={`text-xl font-semibold ${bebasSans.className} font-bold flex-1 text-right `}
              >
                {formatCurrency(product.price)}
              </h2>
            </div>

            <h2
              className={`text-xl font-semibold ${bebasSans.className} font-bold `}
            >
              {product.name}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;
