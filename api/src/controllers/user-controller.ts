import { UserService } from "../services/user-service";
import { Request, Response, NextFunction } from "express";

const userService = new UserService();

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.createUser(req.body);
    const loggedInUser = await userService.loginUser({
      email: user.email,
      password: req.body.password,
    });
    return res.status(200).json({
      message: "Success!",
      data: loggedInUser,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const loggedInUser = await userService.loginUser({
            email: req.body.email,
            password: req.body.password,
        });
        return res.status(200).json({
            message: "Success!",
            data: loggedInUser,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};
