import bebasSans from "@/app/utils/bebasnueue";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const SidebarFilter = ({ isSheet }: { isSheet: boolean }) => {
  if (isSheet) {
    return (
      <div className="w-full">
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
        <Accordion type="single" collapsible>
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
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">PetraTools</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">PetraGrow</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">PetraMax</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">PetraProtect</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-textPrimary">
              <span
                className={`${bebasSans.className} text-textPrimary text-xl`}
              >
                TYPE
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-textPrimary">
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Foggers</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Backpack Sprayers</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Growing Solutions</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Cart Sprayers</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-textPrimary">
              <span
                className={`${bebasSans.className} text-textPrimary text-xl`}
              >
                CAPACITY
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-textPrimary">
              <RadioGroup defaultValue="comfortable">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">1 Galon</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">2 Galon</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">3 Galon</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">4 Galon</Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
  return (
    <aside className="col-span-3 text-white p-4 border-r-[1.5px] border-r-gray-600  overflow-y-auto max-h-full hidden lg:block">
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
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-textPrimary">
            <span className={`${bebasSans.className} text-textPrimary text-xl`}>
              BRAND
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-textPrimary">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">PetraTools</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">PetraGrow</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">PetraMax</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">PetraProtect</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-textPrimary">
            <span className={`${bebasSans.className} text-textPrimary text-xl`}>
              TYPE
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-textPrimary">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Foggers</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Backpack Sprayers</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Growing Solutions</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Cart Sprayers</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-textPrimary">
            <span className={`${bebasSans.className} text-textPrimary text-xl`}>
              CAPACITY
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-textPrimary">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">1 Galon</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">2 Galon</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">3 Galon</Label>
              </div>

              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">4 Galon</Label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default SidebarFilter;
