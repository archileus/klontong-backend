import { ErrorType } from "@/common/middleware/errorHandler/errorType";
import { ApiResponse } from "@/common/types";
import { RequestHandler } from "express";
import { UserModel } from "./model";


export class UserController {
    public static isAuthenticatedUser: RequestHandler = async (req, res, next) => {
        let response: ApiResponse;
        if (req.session.user) {
            response = {
                code: ErrorType.SUCCESS.code,
                message: ErrorType.SUCCESS.message,
                data: req.session.user
            }
        } else {
            response = {
                code: ErrorType.NOT_LOGGED_IN.code,
                message: ErrorType.NOT_LOGGED_IN.message,
            }
        }
        res.json(response)
    }
    public static getUser: RequestHandler = async (req, res, next) => {
        const userList = await UserModel.findUser();
        res.json(userList)
    }



}
