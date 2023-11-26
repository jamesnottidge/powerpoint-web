import { Router } from "express"
import { createPresentation } from "../controllers/presentation-controller";
import { body } from "express-validator";
import { handleInputErrors } from "../middleware/errorMiddleware";

const presentationRouter = Router();

presentationRouter.get("/", (req, res) => {
  res.send("JAYS ON MY FEET");
});

presentationRouter.post(
  "/create",
  body("title").isString().isLength({ min: 1 }),
  body("description").isString().isLength({ min: 1 }),
  body("is_public").isBoolean().optional(),
  body("is_published").isBoolean().optional(),
  handleInputErrors,

  createPresentation
);

export default presentationRouter;
