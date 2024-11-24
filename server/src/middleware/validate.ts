import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

/**
 *Middleware function to validate request data against a given Zod schema
 */
export const validateData = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Use the Zod schema to validate the request body
    const results = schema.safeParse(req.body);

    // If validation fails, return a 400 Bad Request response with validation errors
    if (!results.success) {
      res.status(400).json({
        success: false,
        message: results.error,
      });

      return;
    }

    // If validation succeeds, replace the request body with the validated and parsed data
    req.body = results.data;

    // Proceed to the next middleware or route handler
    next();
  };
};
