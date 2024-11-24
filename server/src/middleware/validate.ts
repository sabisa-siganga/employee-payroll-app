import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validateData = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const results = schema.safeParse(req.body);

    if (!results.success) {
      res.status(400).json({
        success: false,
        message: results.error,
      });

      return;
    }

    req.body = results.data;
    next();
  };
};
