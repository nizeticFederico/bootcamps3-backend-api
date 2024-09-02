import Cart from "./model";
import { ICart } from "../../types";
import User from "../user/model";

class CartDao {

  async getAllCarts(){

    try {
      const allCarts = await Cart.find();
      return allCarts;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }


  async addNewCart(cart:ICart){

    try {
      const newCart = await Cart.create(cart);
      return newCart;
    } catch (error) {
      throw new Error("Invalid cart model");
    }
  }

  async addNewProduct(product_id: string, quantity: number , userId:string) {
    
    try {
      let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart =  await Cart.create({ user: userId, products: [], total_price: 0 });
    }
    const existingProductIndex = cart.products.findIndex(p => p.product_id.toString() === product_id);
    if (existingProductIndex > -1) {
      cart.products[existingProductIndex].quantity += quantity;
    } else {
      cart.products.push( {product_id, quantity});
    }
    await cart.save();
    return cart;

    } catch (error) {
      console.log(error)
      throw Error((error as Error).message);
    }
    
  }
}


export const cartDao = new CartDao();