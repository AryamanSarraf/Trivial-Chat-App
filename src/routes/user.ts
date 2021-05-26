import {Router} from "express";
import {handleGetUser, handleSignUp, handleSignIn, handleGetLogOut} from "../controllers/user";

export const userRouter = Router();

userRouter.get("/", handleGetUser);
userRouter.post("/signup", handleSignUp);
userRouter.post("/signin", handleSignIn);
userRouter.get("/logOut", handleGetLogOut);
