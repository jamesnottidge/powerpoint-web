import { Router } from "express";
import { createPresentation } from "../controllers/presentation-controller";

const presentationRouter = Router();

presentationRouter.get("/", (req, res) => {
  res.send("JAYS ON MY FEET");
});

presentationRouter.post("/create", createPresentation);

export default presentationRouter;
