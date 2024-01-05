import { CustomError } from "@/common/middleware/errorHandler/CustomError";
import { prisma } from "../../prisma/client";
import { CreateUserInput } from "./types";



export class UserModel {
    public static findUser = async () => {

        const userList = await prisma.user.findMany();
        return userList;
    }

}