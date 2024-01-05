import { CustomError } from "@/common/middleware/errorHandler/CustomError";
import { prisma } from "../../prisma/client";
import { CreateUserInput } from "./types";
import bcrypt from 'bcrypt'


export class RegisterModel {
    public static create = async (input: CreateUserInput) => {
        const { password, ...rest } = input;
        const saltRound = 10;
        const salt = bcrypt.genSaltSync(saltRound);
        const hashedPassword = bcrypt.hashSync(password, salt)

        const createdData = await prisma.user.create({
            data: {
                ...rest,
                password: hashedPassword
            }
        });
        const { password: createdPassword, ...restCreatedData } = createdData

        return restCreatedData;
    }
}