import { ApiResponse } from "@/common/types"

export type CreateProductInput = {
    categoryId: number,
    name: string,
    description: string,
    sku: string,
    weight: number,
    width: number,
    length: number,
    height: number,
    image: string,
    price: number,
}

export type ProductListParam = {
    skip: number,
    take: number,

}

export type ApiProductListResponse = {
    total: number,
    skip: number,
    take: number,
} & ApiResponse