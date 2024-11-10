"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useQueryParamsHook } from "@/hooks/useQueryParamHook";
import bebasSans from "@/lib/bebasnueue";

interface AsideProps {
  brands: Array<{ brand: string }>;
  tags: Array<string>;
  isSheet: boolean;
}

interface Filter {
  key: string;
  value: string;
}

function Brands({
  brandCurrent,
  handleAddQueryParam,
  brands,
}: {
  brandCurrent: string;
  handleAddQueryParam: (key: string, value: string) => void;
  brands: Array<{ brand: string }>;
}) {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-textPrimary">
          <span className={`${bebasSans.className} text-textPrimary text-xl`}>
            BRAND
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-textPrimary">
          <RadioGroup
            value={brandCurrent}
            onValueChange={(value) => {
              // overide brand filter just one in filter
              handleAddQueryParam("brand", value);
            }}
          >
            {brands.map((brandItem: { brand: string }) => {
              return (
                <div
                  className="flex items-center space-x-2"
                  key={brandItem.brand}
                >
                  <RadioGroupItem
                    value={brandItem?.brand.toUpperCase()}
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
  );
}

function Tags({
  tags,
  handleAddQueryParam,
  tagsCurrent,
  deleteQueryParam,
}: {
  tags: Array<string>;
  tagsCurrent: string;
  handleAddQueryParam: (key: string, value: string) => void;
  deleteQueryParam: (key: string) => void;
}) {
  const handleSetFilters = (value: string) => {
    const tagsArray = tagsCurrent ? tagsCurrent.split(",") : [];
    const updatedTags = tagsArray.includes(value)
      ? tagsArray.filter((tag) => tag !== value) // Remove tag if it already exists
      : [...tagsArray, value]; // Add tag if it doesn't exist

    if (updatedTags.length === 0) {
      deleteQueryParam("tags");
      return;
    }

    handleAddQueryParam("tags", updatedTags.join(","));
  };

  const tagsCurrentSpliting = tagsCurrent ? tagsCurrent.split(",") : [];

  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-textPrimary">
          <span className={`${bebasSans.className} text-textPrimary text-xl`}>
            TAGS
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-textPrimary">
          <RadioGroup defaultValue="comfortable">
            {tags.map((tagItem) => {
              return (
                <div className="flex items-center space-x-2" key={tagItem}>
                  <Checkbox
                    id={tagItem}
                    checked={tagsCurrentSpliting.includes(tagItem)}
                    onCheckedChange={() => {
                      handleSetFilters(tagItem);
                    }}
                  />
                  <label
                    htmlFor={tagItem}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {tagItem.toUpperCase()}
                  </label>
                </div>
              );
            })}
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function FilterHandler({
  filters,
  handleClearAllFilters,
}: {
  filters: Filter[];
  handleClearAllFilters: () => void;
}) {
  return (
    <div className="flex flex-row items-center justify-between">
      <h2 className={`text-2xl ${bebasSans.className} text-textPrimary`}>
        FILTER BY
      </h2>
      {filters.length > 0 && (
        <p
          className="underline underline-offset-1 text-textPrimary text-xs mt-1 cursor-pointer"
          onClick={() => {
            handleClearAllFilters();
          }}
        >
          Clear all
        </p>
      )}
    </div>
  );
}

export default function Aside({ brands, tags, isSheet }: AsideProps) {
  const { getQueryParam, addQueryParam, deleteQueryParam } =
    useQueryParamsHook();

  const brandCurrent = getQueryParam("brand") || "";
  const tagsCurrent = getQueryParam("tags") || "";

  const handleAddQueryParam = (key: string, value: string) => {
    addQueryParam(key, value);
  };

  const handleClearAllFilters = () => {
    deleteQueryParam(["brand", "tags"]);
  };

  const handleClearPerFilter = ({ key, value }: Filter) => {
    deleteQueryParam([key, value]);
    if (key === "brand") {
      deleteQueryParam("brand");
    }

    if (key === "tags") {
      const tagsCurrentBeforeChange = getQueryParam("tags") || "";
      const splitTags = tagsCurrentBeforeChange.split(",");

      const newTags = splitTags.filter((tag) => tag !== value);

      if (newTags.length > 0) {
        addQueryParam("tags", newTags.join(","));
      } else {
        deleteQueryParam("tags");
      }
    }
  };

  const tagsSpliting = tagsCurrent ? tagsCurrent.split(",") : [];

  const filters = [
    ...(brandCurrent ? [{ key: "brand", value: brandCurrent }] : []),
    ...tagsSpliting.map((tag) => ({ key: "tags", value: tag })),
  ];

  if (isSheet) {
    return (
      <div className="w-full flex flex-col items-start w-full ">
        <FilterHandler
          filters={filters}
          handleClearAllFilters={handleClearAllFilters}
        />

        {filters.length > 0 &&
          filters.map((filter) => (
            <div
              key={filter.value}
              className="inline-flex items-center bg-gray-600 text-white text-sm font-semibold px-2 py-1 rounded-full mt-2 mr-[10px]"
            >
              <span className="text-[10px] font-normal">
                {filter.key.toUpperCase()}: {filter.value}
              </span>
              <button
                className="ml-2 bg-transparent hover:bg-gray-700 text-white rounded-full focus:outline-none"
                onClick={() => {
                  handleClearPerFilter({
                    key: filter.key,
                    value: filter.value,
                  });
                }}
              >
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
          ))}
        <hr className=" my-0 bg-gray-600 border-0 h-[1.4px] mt-2 w-full" />
        <Brands
          brands={brands}
          brandCurrent={brandCurrent}
          handleAddQueryParam={handleAddQueryParam}
        />
        <Tags
          tags={tags}
          deleteQueryParam={deleteQueryParam}
          tagsCurrent={tagsCurrent}
          handleAddQueryParam={handleAddQueryParam}
        />
      </div>
    );
  }

  return (
    <aside className="col-span-3 text-white p-4 border-r-[1.5px] border-r-gray-600 overflow-y-auto h-screen hidden lg:block">
      <FilterHandler
        filters={filters}
        handleClearAllFilters={handleClearAllFilters}
      />

      {filters.length > 0 &&
        filters.map((filter) => (
          <div
            key={filter.value}
            className="inline-flex items-center bg-gray-600 text-white text-sm font-semibold px-2 py-1 rounded-full mt-2 mr-[10px]"
          >
            <span className="text-[10px] font-normal">
              {filter.key.toUpperCase()}: {filter.value}
            </span>
            <button
              className="ml-2 bg-transparent hover:bg-gray-700 text-white rounded-full focus:outline-none"
              onClick={() => {
                handleClearPerFilter({ key: filter.key, value: filter.value });
              }}
            >
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
        ))}
      <hr className=" my-0 bg-gray-600 border-0 h-[1.4px] mt-2" />
      <div className="flex flex-col items-start justify-start w-full max-h-96 overflow-y-auto overflow-x-hidden pr-2">
        <Brands
          brands={brands}
          brandCurrent={brandCurrent}
          handleAddQueryParam={handleAddQueryParam}
        />
        <Tags
          tags={tags}
          deleteQueryParam={deleteQueryParam}
          tagsCurrent={tagsCurrent}
          handleAddQueryParam={handleAddQueryParam}
        />
      </div>
    </aside>
  );
}
