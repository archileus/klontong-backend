import express from 'express';
import { ProductController } from './controller';
import asyncHandler from "express-async-handler"

const ProductRoute = express.Router();

ProductRoute.get('/category', asyncHandler(ProductController.getCategory))
ProductRoute.get('/list', asyncHandler(ProductController.getProducts))
ProductRoute.get('/detail/:id', asyncHandler(ProductController.getProductDetail))
ProductRoute.get('/search', asyncHandler(ProductController.search))

ProductRoute.post('/create', asyncHandler(ProductController.create))



export default ProductRoute;
