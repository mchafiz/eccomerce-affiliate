import { Filters } from "@/types";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function getMenus() {
  try {
    return await prisma.menus.findMany();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get menus");
  } finally {
    await prisma.$disconnect();
  }
}

export async function getBrands() {
  try {
    const brands = await prisma.products.findMany({
      select: {
        brand: true, // Select only the 'brand' column
      },
      orderBy: {
        brand: "asc", // Optional: Order by brand alphabetically
      },
      distinct: ["brand"], // Optional: Ensure only unique brands are returned
    });

    return brands;
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw new Error("Failed to fetch brands");
  } finally {
    await prisma.$disconnect();
  }
}

export async function getTags() {
  try {
    const tags = await prisma.products.findMany({
      select: {
        tags: true, // Select only the 'brand' column
      },
      orderBy: {
        tags: "asc", // Optional: Order by brand alphabetically
      },
      distinct: ["tags"], // Optional: Ensure only unique brands are returned
    });

    // Step 1 & 2: Extract and split the tags
    const tagsArray = tags.flatMap((item) => item.tags.split(","));

    // Step 3: Get unique tags using reduce
    const uniqueTags: string[] = tagsArray.reduce<string[]>((acc, tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
      return acc;
    }, []);

    return uniqueTags;
  } catch (error) {
    console.error("Error fetching tags:", error);
    throw new Error("Failed to fetch tags");
  } finally {
    await prisma.$disconnect();
  }
}

export async function getProduct(name: string) {
  try {
    // find by name of product

    if (name !== "") {
      return await prisma.products.findFirst({
        where: {
          // Use `contains` for a case-insensitive search
          name: {
            contains: name.replace(/-/g, " "), // Replace hyphens with spaces
            mode: "insensitive", // Make the search case insensitive
          },
        },
      });
    }
    return null;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get product");
  } finally {
    await prisma.$disconnect();
  }
}

export async function getProducts(filters?: Filters) {
  try {
    const products = await prisma.products.findMany({
      where: {
        // Filtering by categories (assuming category is an ID)
        categories: filters?.category
          ? {
              some: {
                id: filters.category, // Filter by category ID
              },
            }
          : undefined,
        brand: filters?.brand ? filters.brand : undefined,
        tags: filters?.tags
          ? {
              contains: filters.tags, // Filter by tags if provided
            }
          : undefined,
      },
      take: filters?.count ? filters.count : undefined,
    });

    return products;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get products");
  } finally {
    await prisma.$disconnect();
  }
}

export async function getCategories() {
  try {
    return await prisma.category.findMany();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get categories");
  } finally {
    await prisma.$disconnect();
  }
}
