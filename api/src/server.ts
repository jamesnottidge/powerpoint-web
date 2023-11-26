import express from "express";
import { IncomingMessage } from "node:http";
import cors from "cors";
import morgan from "morgan";
import { login, signUp } from "./controllers/user-controller";
import errorHandler, { handleInputErrors } from "./middleware/errorMiddleware";
import { body } from "express-validator";
import router from "./routes/router";
import { protect } from "./modules/auth";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["*", "http://localhost:5001"], 
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
app.post(
  "/login",
  body("email").isEmail(),
  body("password").isString().isLength({ min: 5 }),
  handleInputErrors,
  login
);
app.use("/api", protect, router);

app.use(errorHandler);

export default app;
