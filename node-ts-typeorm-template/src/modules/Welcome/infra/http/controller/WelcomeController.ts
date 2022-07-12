import { Request, Response } from "express";
import AppError from "../../../../../shared/error/AppError";

export default class WelcomeController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      return response.json({
        message: "Hello World 🌍",
      });
    } catch (err) {
      throw new AppError(err.message, 400);
    }
  }
}
