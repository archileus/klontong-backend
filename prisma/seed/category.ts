import { prisma } from "../client";

export const seedData = [
    {
        id: 1,
        name: 'Cemilan',
    },
    {
        id: 2,
        name: 'Pakaian',
    }
]


export async function runCategorySeed() {
    const currentRecords = await prisma.category.findMany();
    if (currentRecords.length > 0) return;

    await prisma.category.createMany({
        data: seedData
    })
    console.log('Category seeded')
}