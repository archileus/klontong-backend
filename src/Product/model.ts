import { prisma } from "../../prisma/client";
import { CreateProductInput, ProductListParam } from "./types";


export class ProductModel {
    public static findProductDetail = async (productId: number) => {
        return await prisma.product.findUnique({
            where: {
                id: productId
            }
        })
    }
    public static getTotalProductsCount = async () => {
        return await prisma.product.count();
    }
    public static findAllProducts = async (param?: ProductListParam) => {
        let skipTake = param ? param : {};

        const list = await prisma.product.findMany({
            ...skipTake,
            orderBy: {
                id: 'asc'
            }
        });

        return list;
    }
    public static findAllCategory = async () => {
        const list = await prisma.category.findMany();

        return list;
    }

    public static create = async (input: CreateProductInput) => {
        const createdData = await prisma.product.create({
            data: { ...input }
        });

        return createdData;
    }


}