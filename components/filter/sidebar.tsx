import bebasSans from "@/app/utils/bebasnueue";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getBrands, getTags } from "@/lib/prisma";

export default async function Sidebar({ isSheet }: { isSheet: boolean }) {
  const brands = await getBrands();
  const tags = await getTags();
  console.log(tags);

  if (isSheet) {
    return (
      <div className="w-full flex flex-col items-start w-full ">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className={`text-2xl ${bebasSans.className} text-textPrimary`}>
            FILTER BY
          </h2>
          <p className="underline underline-offset-1 text-textPrimary text-xs mt-1">
            Clear all
          </p>
        </div>
        <div className="inline-flex items-center bg-gray-600 text-white text-sm font-semibold px-2 py-1 rounded-full mt-5">
          <span className="text-[10px] font-normal">Brand PetraTools</span>
          <button className="ml-2 bg-transparent hover:bg-gray-700 text-white rounded-full focus:outline-none">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <hr className=" my-0 bg-gray-600 border-0 h-[1.4px] mt-2 w-full" />
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-textPrimary">
              <span
                className={`${bebasSans.className} text-textPrimary text-xl`}
              >
                BRAND
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-textPrimary">
              <RadioGroup defaultValue="comfortable">
                {brands.map((brandItem) => {
                  return (
                    <div
                      className="flex items-center space-x-2"
                      key={brandItem.brand}
                    >
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1">
                        {brandItem.brand.toUpperCase()}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-textPrimary">
              <span
                className={`${bebasSans.className} text-textPrimary text-xl`}
              >
                TAGS
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-textPrimary">
              <RadioGroup defaultValue="comfortable">
                {tags.map((tagItem) => {
                  return (
                    <div className="flex items-center space-x-2" key={tagItem}>
                      <RadioGroupItem value={tagItem} id={tagItem} />
                      <Label htmlFor={tagItem}>{tagItem.toUpperCase()}</Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
  return (
    <aside className="col-span-3 text-white p-4 border-r-[1.5px] border-r-gray-600 overflow-y-auto h-screen hidden lg:block">
      <div className="flex flex-row items-center justify-between">
        <h2 className={`text-2xl ${bebasSans.className} text-textPrimary`}>
          FILTER BY
        </h2>
        <p className="underline underline-offset-1 text-textPrimary text-xs mt-1">
          Clear all
        </p>
      </div>
      <div className="inline-flex items-center bg-gray-600 text-white text-sm font-semibold px-2 py-1 rounded-full mt-5">
        <span className="text-[10px] font-normal">Brand PetraTools</span>
        <button className="ml-2 bg-transparent hover:bg-gray-700 text-white rounded-full focus:outline-none">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <hr className=" my-0 bg-gray-600 border-0 h-[1.4px] mt-2" />
      <div className="flex flex-col items-start justify-start w-full max-h-96 overflow-y-auto overflow-x-hidden pr-2">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-textPrimary">
              <span
                className={`${bebasSans.className} text-textPrimary text-xl`}
              >
                BRAND
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-textPrimary">
              <RadioGroup>
                {brands.map((brandItem) => {
                  return (
                    <div
                      className="flex items-center space-x-2"
                      key={brandItem.brand}
                    >
                      <RadioGroupItem
                        value={brandItem.brand}
                        id={brandItem.brand}
                      />
                      <Label htmlFor={brandItem.brand}>
                        {brandItem.brand.toUpperCase()}
                      </Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-textPrimary">
              <span
                className={`${bebasSans.className} text-textPrimary text-xl`}
              >
                TAGS
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-textPrimary">
              <RadioGroup defaultValue="comfortable">
                {tags.map((tagItem) => {
                  return (
                    <div className="flex items-center space-x-2" key={tagItem}>
                      <RadioGroupItem value={tagItem} id={tagItem} />
                      <Label htmlFor={tagItem}>{tagItem.toUpperCase()}</Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </aside>
  );
}
