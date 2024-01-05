import { JsonObject } from "@prisma/client/runtime/library"

export type ApiResponse = {
    code: string,
    message: string,
    data?: JsonObject | JsonObject[]
}