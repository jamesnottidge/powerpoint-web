import { PresentationService } from "../services/presentation-service";

import { Request, Response, NextFunction } from "express";

const presentationService = new PresentationService();

export const createPresentation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = { created_by: req.user.id, ...req.body };
    const presentation = await presentationService.createPresentation(data);
    return res.status(200).json({
      message: "Success!",
      data: presentation,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const addEditorToPresentation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = { created_by: req.user.id, ...req.body };
    const presentation = await presentationService.addEditorToPresentation(
      data.presentation_id,
      data.editor_id,
      data.created_by
    );
    return res.status(200).json({
      message: "Success!",
      data: presentation,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};


export const getPresentationsByUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const presentations = await presentationService.getPresentationsByUser(req.user.id);
        return res.status(200).json({
            message: "Success!",
            data: presentations,
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
}