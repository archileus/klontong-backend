import { NextFunction, Request, Response } from "express";
import { CustomError } from "./CustomError";
import { ApiResponse } from "@/common/types";

export const errorMiddleware = (
    err: Error | CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        const response: ApiResponse = {
            code: err.code,
            message: err.message,
            data: err.data
        }
        res.status(200).json(response)
    }
    else {
        const response = {
            code: err.name,
            message: err.message,
        }
        res.status(200).json(response)
    }


}