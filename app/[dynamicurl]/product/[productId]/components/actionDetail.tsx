"use client";
import { Button } from "@/components/ui/button";

export default function ActionDetail({
  affiliateLink,
}: {
  affiliateLink: string;
}) {
  return (
    <div className="flex flex-col items-start justify-center gap-2 mt-4 w-full">
      <Button
        size="lg"
        className="w-[300px] rounded-3xl"
        onClick={() => {
          // new tab with url in nextjs

          window.open(`${affiliateLink}`, "_blank");
        }}
      >
        Buy Now
      </Button>
      <Button size="lg" className="w-[300px] rounded-3xl">
        Add to Favorite
      </Button>
    </div>
  );
}
