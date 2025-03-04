import { Request, Response } from "express";

export const listProducts = (req: Request, res: Response) => {
  res.send();
};

export const getProductById = (req: Request, res: Response) => {
  res.send("get" + req.params.id);
};

export const createProduct = (req: Request, res: Response) => {
  res.send();
};

export const updateProduct = (req: Request, res: Response) => {
  res.send();
};
export const deleteProduct = (req: Request, res: Response) => {
  res.send();
};
