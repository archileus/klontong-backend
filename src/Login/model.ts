import { CustomError } from "@/common/middleware/errorHandler/CustomError";
import { prisma } from "../../prisma/client";
import { LoginInput } from "./types";
import bcrypt from 'bcrypt'
import { ErrorType } from "@/common/middleware/errorHandler/errorType";


export class LoginModel {
    public static login = async (input: LoginInput) => {
        const { password, email } = input;
        const currentUser = await prisma.user.findFirst({
            where: {
                email: email
            },
        })
        if (!currentUser) throw new CustomError(ErrorType.USER_NOT_FOUND.code, ErrorType.USER_NOT_FOUND.message);
        const { password: hashedPassword, ...restCurrentUser } = currentUser
        const isPasswordMatch = bcrypt.compareSync(password, hashedPassword);
        if (!isPasswordMatch) throw new CustomError(ErrorType.INCORRECT_PASSWORD.code, ErrorType.INCORRECT_PASSWORD.message);

        return restCurrentUser;

    }
}