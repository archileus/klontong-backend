import { prisma } from "../client";
import { faker } from '@faker-js/faker';

export const getSeedData = (totalData: number) => {
    let seedDataList = [];

    for (let i = 1; i <= totalData; i++) {
        const seedData = {
            categoryId: faker.number.int({ min: 1, max: 2 }),
            name: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            sku: faker.commerce.isbn(),
            weight: faker.number.int({ min: 1000, max: 5000 }),
            width: faker.number.int({ min: 1, max: 100 }),
            length: faker.number.int({ min: 1, max: 100 }),
            height: faker.number.int({ min: 1, max: 100 }),
            image: faker.image.url(),
            price: faker.number.int({ min: 10000, max: 100000 })
        }
        seedDataList.push(seedData);
    }
    return seedDataList;
}


export async function runProductSeed() {
    const currentRecords = await prisma.product.findMany();
    if (currentRecords.length > 0) return;
    const seedDataList = getSeedData(100);
    await prisma.product.createMany({
        data: seedDataList
    })
    console.log('Product seeded')
}