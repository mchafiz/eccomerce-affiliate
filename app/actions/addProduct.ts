'use server';

import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export default async function addProducts() {
    try {
        await prisma.products.create({
            data: {
                name: "Sample Product",
                price: 100000,
                affiliateLink: "https://affiliate.link",
                brand: "Brand A",
                description: "Sample product description",
                rating: 5,
                menu: { connect: { id: 1 } }, // Hubungkan dengan menu
                categories: {
                    connect: [
                        { id: 2 },
                    ],
                },
            },
        });


    } catch (error) {
        console.error(error);
    }
}