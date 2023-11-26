import { Router } from "express";
import { createSlide } from "../controllers/slide-controller";

const slideRouter = Router();

slideRouter.get("/", (req, res) => {
  res.send("A SLIDE IS IT");
});

slideRouter.post("/create", createSlide);

export default slideRouter;
