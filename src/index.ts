import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import session from 'express-session';
import { LoginController } from './Login/controller';
import LoginRoute from './Login/route';
import ProductRoute from './Product/route';
import RegisterRoute from './Register/route';
import { UserController } from './User/controller';
import UserRoute from './User/route';
import { errorMiddleware } from './common/middleware/errorHandler/errorMiddleware';

dotenv.config()

const app: Express = express();
const port = 3030;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))


app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser())
app.use(
    session({
        secret: 'keyboardcat',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
        }
    })
)

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript API Server");
});

app.use("/register", RegisterRoute)
app.use("/login", LoginRoute)
app.post("/logout", LoginController.logout)
app.use("/user", UserRoute);
app.use("/product", ProductRoute);
app.get("/isAuthenticatedUser", UserController.isAuthenticatedUser);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use(errorMiddleware);