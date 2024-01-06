import { NextFunction, Request, Response } from "express";
import { CustomError } from "./CustomError";
import { ApiResponse } from "@/common/types";
import { ErrorType } from "./errorType";

export const errorMiddleware = (
    err: Error | CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof CustomError) {
        const response: ApiResponse = {
            code: err.code,
            message: err.message || ErrorType.INTERNAL_SERVER_ERROR.message,
            data: err.data
        }
        res.status(err.status || 500).json(response)
    }
    else {
        const response = {
            code: err.name || ErrorType.INTERNAL_SERVER_ERROR.code,
            message: err.message,
        }
        console.error(err);
        res.status(500).json(response)
    }


}