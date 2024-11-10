import { Filters } from "@/app/types";

// Utility function to convert filters to query parameters
function createQueryStringFilter(filters: Filters): string {
  const params: URLSearchParams = new URLSearchParams();

  const finalTags = filters.tags?.split(",") || [];

  if (filters.category) {
    params.append("category", filters.category.toString());
  }

  if (filters.brand) {
    params.append("brand", filters.brand);
  }

  if (filters.tags) {
    params.append("tags", finalTags.join(","));
  }

  if (filters.count) {
    params.append("count", filters.count.toString());
  }

  return params.toString();
}

export async function getProductsApi(filters: Filters) {
  try {
    const queryString = createQueryStringFilter(filters); // Create query string from filters
    const response = await fetch(`/api/products?${queryString}`); // Use query string in the URL
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get products api");
  }
}
