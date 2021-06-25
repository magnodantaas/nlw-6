import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "87e9019b1fc6d85e91c34698ae347126"
    ) as IPayload;

    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  }

}