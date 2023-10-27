import express from "express";
import { IncomingMessage } from "node:http";
import cors from "cors";
import morgan from "morgan";
import { signUp } from "./controllers/user-controller";
import * as e from "express";
import errorHandler, { handleInputErrors } from "./middleware/errorMiddleware";
import { body, validationResult } from "express-validator";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("dev"));

app.get("/", (req: IncomingMessage, res) => {
  res.send("Hello World");
});

app.post(
  "/signup",
  body("email").isEmail(),
  body("password").isString().isLength({ min: 5 }),
  body("firstName").isString().trim().notEmpty(),
  body("lastName").isString().trim().notEmpty(),
  handleInputErrors,
  signUp
);
app.use(errorHandler);

export default app;
