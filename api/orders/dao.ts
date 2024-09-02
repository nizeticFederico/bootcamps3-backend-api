import mongoose from "mongoose";
import Orders from "./model";
import { IOrder } from "../../types";

class OrdersDao {

    async getAllOrders(){

        try {
            const allOrders = await Orders.find({});
            return allOrders;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async getOrdersByUserId(id:string){
        try {
            const userOrders = await Orders.find({"user": id});
            return userOrders;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }

    async createOrder(order:IOrder){

        try {
            const newOrder = await Orders.create(order);
            return newOrder;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}


const ordersDao = new OrdersDao();


export default ordersDao;