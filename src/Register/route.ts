import express from 'express';
import { RegisterController } from './controller';
import asyncHandler from "express-async-handler"

const RegisterRoute = express.Router();

RegisterRoute.post('/', asyncHandler(RegisterController.register))


export default RegisterRoute;
