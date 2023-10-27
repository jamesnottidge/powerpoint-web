// errorMiddleware.ts
import {
  AuthenticationError,
  DatabaseError,
  ValidationError,
} from "../modules/error-types";
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      errors: errors.array(),
      request: req.body,
      message: "Invalid Input",
    });
  } else {
    next();
  }
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  if (err instanceof AuthenticationError) {
    res.status(401).json({ error: err.message, request: req.body });
  } else if (err instanceof DatabaseError) {
    res.status(500).json({ error: err.message, request: req.body });
  } else if (err instanceof ValidationError) {
    res.status(400).json({ error: err.message, request: req.body });
  } else {
    res.status(500).json({ error: "Internal Server Errorse", request: req.body });
  }
};

export default errorHandler;
