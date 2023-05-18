import { NextFunction, Request, Response } from "express";
import { createUserToDB } from "./user.service";

//Request,Response আর next এগুলো আসবে express থেকে:
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await createUserToDB();
        res.status(200).json({
            status: "success",
            message: "User post successfully",
            data: user,
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "User post Failed",
            err: error.message,
        })
        console.log(error);
    }
}