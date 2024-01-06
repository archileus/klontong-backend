import { CustomError } from "@/common/middleware/errorHandler/CustomError";
import { ErrorType } from "@/common/middleware/errorHandler/errorType";
import { ApiResponse } from "@/common/types";
import { RequestHandler } from "express";
import { LoginModel } from "./model";
import { UserSession } from "./types";

declare module 'express-session' {
    interface SessionData {
        user: UserSession;
    }
}

export class LoginController {
    public static login: RequestHandler = async (req, res, next) => {
        const bodyParsed = req.body;
        const loginData = await LoginModel.login(bodyParsed);

        if (!loginData) throw new CustomError(500, ErrorType.INTERNAL_SERVER_ERROR.code, ErrorType.INTERNAL_SERVER_ERROR.message)
        req.session.user = loginData;

        const response: ApiResponse = {
            code: ErrorType.SUCCESS.code,
            message: ErrorType.SUCCESS.message,
            data: loginData
        }
        res.json(response)
    }

    public static logout: RequestHandler = async (req, res, next) => {
        req.session.destroy(() => {

        });

        const response: ApiResponse = {
            code: ErrorType.SUCCESS.code,
            message: ErrorType.SUCCESS.message,
        }
        res.json(response)
    }
}
