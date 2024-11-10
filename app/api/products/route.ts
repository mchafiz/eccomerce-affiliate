// app/api/products/route.ts

import { NextResponse } from "next/server";
import { getProducts } from "@/lib/prisma"; // Adjust the import path as needed
import { Filters } from "@/types";

export async function GET(req: Request) {
  try {
    // Retrieve query parameters from the request URL
    const { searchParams } = new URL(req.url);

    // Use type assertions or defaults to ensure correct types
    const filters: Filters = {
      category: searchParams.get("category")
        ? parseInt(searchParams.get("category")!)
        : null, // Parse to number
      tags: searchParams.get("tags") || "", // Default to empty string if undefined
      brand: searchParams.get("brand") || "", // Default to empty string if undefined
      count: searchParams.get("count")
        ? parseInt(searchParams.get("count")!)
        : 0, // Default to 0 if undefined
    };

    // Call getProducts with filtering parameters
    const products = await getProducts({
      category: filters.category,
      tags: filters.tags,
      brand: filters.brand,
      count: filters.count, // Ensure count is a number
    });

    return NextResponse.json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// Note: POST and other methods can be implemented similarly if needed.
