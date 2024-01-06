import { RequestHandler } from "express";
import { ProductModel } from "./model";
import { ApiResponse } from "@/common/types";
import { ErrorType } from "@/common/middleware/errorHandler/errorType";
import { JsonObject } from "@prisma/client/runtime/library";
import { DEFAULT_SKIP, DEFAULT_TAKE } from "./constants";
import { ApiProductListResponse } from "./types";
import { CustomError } from "@/common/middleware/errorHandler/CustomError";


export class ProductController {

    public static getProductDetail: RequestHandler = async (req, res, next) => {
        const productId = req.params.id;
        if (!productId) throw new CustomError(400, ErrorType.PRODUCT_ID_NOT_FOUND.code, ErrorType.PRODUCT_ID_NOT_FOUND.message)
        const isNumberId = parseInt(productId);
        if (isNaN(isNumberId)) throw new CustomError(400, ErrorType.PRODUCT_ID_NOT_FOUND.code, ErrorType.PRODUCT_ID_NOT_FOUND.message)

        const productDetail = await ProductModel.findProductDetail(isNumberId);
        if (!productDetail) throw new CustomError(400, ErrorType.PRODUCT_ID_NOT_FOUND.code, ErrorType.PRODUCT_ID_NOT_FOUND.message)

        const response: ApiResponse = {
            code: ErrorType.SUCCESS.code,
            message: ErrorType.SUCCESS.message,
            data: productDetail
        }
        res.json(response)
    }
    public static getProducts: RequestHandler = async (req, res, next) => {

        const take = parseInt(req.query.take as string) || DEFAULT_TAKE;
        const skip = parseInt(req.query.skip as string) || DEFAULT_SKIP;

        const productList = await ProductModel.findAllProducts({ take, skip });
        const totalProductCount = await ProductModel.getTotalProductsCount();
        const response: ApiProductListResponse = {
            code: ErrorType.SUCCESS.code,
            message: ErrorType.SUCCESS.message,
            take,
            skip,
            total: totalProductCount,
            data: productList
        }
        res.json(response)
    }
    public static getCategory: RequestHandler = async (req, res, next) => {

        const categoryList = await ProductModel.findAllCategory();
        const response: ApiResponse = {
            code: ErrorType.SUCCESS.code,
            message: ErrorType.SUCCESS.message,
            data: categoryList
        }
        res.json(response)
    }
    public static create: RequestHandler = async (req, res, next) => {
        const bodyParsed = req.body;
        const createdData = await ProductModel.create(bodyParsed);

        const response: ApiResponse = {
            code: ErrorType.SUCCESS.code,
            message: ErrorType.SUCCESS.message,
            data: createdData
        }
        res.json(response)
    }

    public static search: RequestHandler = async (req, res, next) => {
        const textSearch = req.query.text as string;
        const take = parseInt(req.query.take as string) || DEFAULT_TAKE;
        const skip = parseInt(req.query.skip as string) || DEFAULT_SKIP;

        const resultData = await ProductModel.searchProduct(textSearch, skip, take);

        const response: ApiProductListResponse = {
            code: ErrorType.SUCCESS.code,
            message: ErrorType.SUCCESS.message,
            take,
            skip,
            total: resultData.searchCount,
            data: resultData.resultList
        }
        res.json(response)

    }
}
