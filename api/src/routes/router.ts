import { Router } from "express";
import presentationRouter from "./presentation-router";
import slideRouter from "./slide-router";

const router = Router();

router.use("/v1/presentation", presentationRouter);
router.use("/v1/slide", slideRouter);
export default router;
