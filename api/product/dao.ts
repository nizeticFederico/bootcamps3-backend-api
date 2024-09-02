import { IProduct } from "../../types";
import Product from "./model";

class ProductDao {

    async getAllProducts(
     category: string | undefined,
     seller_id: string | undefined,
     priceStart: number | undefined,
     priceEnd: number | undefined,
     sort: -1 | 1 | undefined,
     page: string,
     limit: string,
    ) {

        try {
            const skip = (Number(page) - 1) * Number(limit);
            const allProducts = await Product.find({
                ...(category ? { category } : {}),
                ...(seller_id ? { seller_id} : {}),
                ...(priceStart && priceEnd
                  ? { price: { $gte: priceStart, $lte: priceEnd } }
                  : {}),
              })
                .sort(sort && { price: sort })
                .skip(skip)
                .limit(Number(limit))
                .populate([{
                  path: 'seller_id',
                  select: '-password'
                }, {
                  path: 'category'
                }]);
                
            return allProducts;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async getProductById(productId: string) {
        try {
          const product = await Product.findById(productId);
          return product;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }

    async getAllProductsBySeller(id:string){
      try {
        const sellerProducts = await Product.find({"seller_id":id});
        return sellerProducts;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }

    async getAllMyProducts(userId:string){
      try {
        const userProducts = await Product.find({"seller_id": userId});
        return userProducts;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }

    async createNewProduct(product:IProduct) {

        try {
            const newProduct = await Product.create(product);
            return newProduct;
        } catch (error) {
            throw Error((error as Error).message);
        }

    }

    async editProduct(productId: string, product: IProduct) {
        try {
          const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            product,
            { new: true }
          );
          return updatedProduct;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }

    async deleteProduct(productId: string) {
        try {
          const deletedProduct = await Product.findByIdAndDelete(productId);
          return deletedProduct;
        } catch (error) {
          throw Error((error as Error).message);
        }
      }
}

const productDao = new ProductDao();

export default productDao;