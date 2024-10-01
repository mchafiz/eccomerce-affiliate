"use client";

import bebasSans from "@/app/utils/bebasnueue";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  affiliateLink: string;
  brand: string;
  description: string;
  rating: number;
  tags: string;
  menuId: number;
}

const Products = ({ products }: { products: Array<Product> }) => {
  const router = useRouter();

  return (
    <main className="col-span-12 lg:col-span-9 max-h-full overflow-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
        {products.map((product) => (
          <div
            onClick={() => router.push("/detail")}
            key={product.id}
            className="bg-transparent p-4 border-b-[1.5px] border-[1.5px] border-orange-100 w-full cursor-pointer hover:bg-orange-200 transition-all ease-linear duration-300"
          >
            <Image
              className="h-44 w-full object-cover rounded-lg object-cover"
              src={`/product/sprayyer.png`}
              alt={`${product.name}`}
              width={300}
              height={300}
            />
            <div className="flex items-center mt-4 justify-between w-full">
              <span className="text-textSecondary">★ ★ ★ ★ ☆</span>
              <h2
                className={`text-xl font-semibold ${bebasSans.className} font-bold flex-1 text-right `}
              >
                {product.price}
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
