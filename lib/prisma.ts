import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function getMenus() {
    try {
        return await prisma.menus.findMany();

    } catch (error) {
        console.error(error);
        throw new Error("Failed to get menus");
    }
}

export async function getProducts() {
    try {
        return await prisma.products.findMany();

    } catch (error) {
        console.error(error);
        throw new Error("Failed to get products");
    }
}

export async function getCategories() {
    try {
        return await prisma.category.findMany();

    } catch (error) {
        console.error(error);
        throw new Error("Failed to get categories");
    }
}