import bebasSans from "@/app/utils/bebasnueue";
import Header from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getMenus, getProduct } from "@/lib/prisma";
import { headers } from "next/headers";
import Image from "next/image";
import ActionDetail from "./components/actionDetail";

export default async function Detail() {
  const menus = await getMenus();
  // Get the current pathname from headers
  const heads = headers();

  const headerUrl = heads.get("x-url") || "/";
  // get last part of url
  const productFromUrl = headerUrl.split("/").pop() ?? "";

  // Replace %20 with -
  const formattedProduct = productFromUrl.replace(/%20/g, "-");

  console.log(formattedProduct);

  const product = await getProduct(formattedProduct);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // Tidak ada digit desimal
      maximumFractionDigits: 0, // Tidak ada digit desimal
    }).format(amount);
  };

  return (
    <div>
      <Header isDetail menus={menus} />
      <div className="bg-bgCustom p-4 border-gray-600 w-full min-h-screen">
        <div className="grid grid-cols-12  mx-4 mt-8 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <Image
              src={`${product?.imageUrl ?? ""}`}
              alt={`${product?.name}`}
              width={800}
              height={800}
            />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-col items-start justify-center w-full ">
              <h1 className={`${bebasSans.className} font-bold text-4xl `}>
                {product?.name}
              </h1>
              <div className="flex items-center mt-1 justify-start w-full gap-2">
                <div className="flex flex-row items-center justify-start gap-1">
                  <span className="text-textSecondary text-lg">★</span>
                  <span className="text-sm text-textPrimary">
                    ({product?.rating})
                  </span>
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
                {formatCurrency(product?.price ?? 0)}
              </p>

              <ActionDetail affiliateLink={product?.affiliateLink ?? ""} />

              <div className="flex flex-col items-start justify-center gap-2 mt-8 w-full">
                <h1 className={`${bebasSans.className} font-bold text-2xl `}>
                  Description
                </h1>
                <ScrollArea className="h-80 pr-5 pt-2 text-textPrimary text-md">
                  {product?.description}
                </ScrollArea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
