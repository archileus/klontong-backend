import { JsonObject } from "@prisma/client/runtime/library";

export class CustomError extends Error {
    public code: string;
    public data?: JsonObject | [JsonObject];
    constructor(errorCode: string, message: string = '', dataAddon?: JsonObject | [JsonObject]) {
        super(message);
        this.code = errorCode
        this.data = dataAddon
        Object.setPrototypeOf(this, new.target.prototype); // Ensure proper prototype chain
    }
}