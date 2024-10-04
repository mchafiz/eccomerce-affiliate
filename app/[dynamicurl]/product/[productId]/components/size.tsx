"use client";

import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Size() {
  const [size, setSize] = useState<string>("");
  const sizes = ["S", "M", "L", "XL"];
  return (
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
  );
}
