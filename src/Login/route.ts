import express from 'express';
import { LoginController } from './controller';
import asyncHandler from "express-async-handler"

const LoginRoute = express.Router();

LoginRoute.post('/', asyncHandler(LoginController.login))


export default LoginRoute;
