import HttpException from "./HttpException";
import { Request, Response, NextFunction } from "express";
import * as respondWith from '../utils/respondWith';

export const errorHandler = (
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.statusCode || 500;
  const message =
    error.message || "It's not you. It's us. We are having some problems.";

  respondWith.error(response, message);
};

export const notFoundHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {

  const message = "Resource not found. ⚠️🧙‍♂️You shall not pass 🧙‍♂️⚠️";

  respondWith.error(response, message, 404);
};