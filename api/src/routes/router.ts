import { Router } from "express";
import presentationRouter from "./presentation-router";

const router = Router();

router.use("/v1/presentation", presentationRouter);

export default router;
