import { SlideService } from "../services/slide-service";

import { Request, Response, NextFunction } from "express";

const slideService = new SlideService();

export const createSlide = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = { added_by: req.user.id, ...req.body };
    const slide = await slideService.createSlide(data);
    return res.status(200).json({
      message: "Success!",
      data: slide,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
