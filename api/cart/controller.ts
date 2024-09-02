import { Request, Response } from "express";
import { cartService } from "./service";
import { ICart } from "../../types";
const {getCarts , addCart , addProduct} = cartService;

class CartController {

  async getCarts(req:Request , res:Response){
    
    try {
      const carts = await getCarts();
      return res.status(200).json(carts);
    } catch (error) {
      return res.status(401).json({error});
    }
  }

  async addCart(req:Request , res:Response){
    const cart:ICart = req.body
    try {
      const newCart = await addCart(cart);
      return res.status(200).json(newCart);
    } catch (error) {
      return res.status(401).json({error}) 
    }
  }

  async addProductToCart(req: Request, res: Response) {
    const userId = req.body.userId;
    const { product_id, quantity } = req.body;

    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    try {
      const newCart = await addProduct(product_id , quantity, userId);
      return res.status(200).json(newCart);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

}

export const cartController = new CartController();