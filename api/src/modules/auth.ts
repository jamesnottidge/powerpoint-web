import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";
import * as bcrypt from "bcrypt";
import { AuthenticationError, ValidationError } from "./error-types";

export const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.APP_SECRET
  );
  return token;
};

export const protect = (req: Request, res: Response, next: NextFunction) => {
  try {
    const bearer = req.headers.authorization;
    if (!bearer) {
      throw new AuthenticationError("Not Authorizeds");
    }

    const [, token] = bearer.split(" ");
    if (!token) {
      throw new AuthenticationError("Invalid Token");
    }
    const payload = jwt.verify(token, process.env.APP_SECRET);
    req.user = payload;
    console.log(req.user);
    next();
    return;
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};

export const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};
