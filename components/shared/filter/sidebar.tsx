import { getBrands, getTags } from "@/lib/prisma";
import Aside from "./aside";

export default async function Sidebar({ isSheet }: { isSheet: boolean }) {
  const brands = await getBrands();
  const tags = await getTags();

  return <Aside brands={brands} tags={tags} isSheet={isSheet} />;
}
