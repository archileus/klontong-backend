import { JsonObject } from "@prisma/client/runtime/library";

export class CustomError extends Error {
    public status: number;
    public code: string;
    public data?: JsonObject | [JsonObject];
    constructor(status: number, errorCode: string, message: string = '', dataAddon?: JsonObject | [JsonObject]) {
        super(message);
        this.status = status
        this.code = errorCode
        this.data = dataAddon
    }
}