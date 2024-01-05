import express from 'express';
import { UserController } from './controller';
import asyncHandler from "express-async-handler"

const UserRoute = express.Router();

UserRoute.get('/', asyncHandler(UserController.getUser))

export default UserRoute;