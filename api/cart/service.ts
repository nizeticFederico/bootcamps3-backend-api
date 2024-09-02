import { ICart } from "../../types";
import { cartDao } from "./dao";

const { getAllCarts , addNewCart , addNewProduct } = cartDao;

class CartService {

 async getCarts() {
  try {
    const carts = await getAllCarts();
    return carts;
  } catch (error) {
    throw Error((error as Error).message);
  }
 }

  async addCart(cart:ICart){
    try {
      const addCart = await addNewCart(cart);
      return addCart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async addProduct( product_id:string , quantity:number , userId:string) {

    try {
      const newProduct = await addNewProduct(product_id, quantity , userId);
      return newProduct;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const cartService = new CartService();