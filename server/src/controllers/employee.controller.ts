import { Request, Response } from "express";

export const getEmployees = async (req: Request, res: Response) => {
  try {
    res.json({
      success: true,
      data: [],
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
