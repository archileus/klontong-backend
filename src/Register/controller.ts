import { RequestHandler } from "express";
import { RegisterModel } from "./model";
import { ApiResponse } from "@/common/types";
import { ErrorType } from "@/common/middleware/errorHandler/errorType";


export class RegisterController {
    public static register: RequestHandler = async (req, res, next) => {
        const bodyParsed = req.body;
        const createdData = await RegisterModel.create(bodyParsed);

        const response: ApiResponse = {
            code: ErrorType.SUCCESS.code,
            message: ErrorType.SUCCESS.message,
            data: createdData
        }
        res.json(response)
    }
}
