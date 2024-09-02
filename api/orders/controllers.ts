import {Request , Response} from 'express'
import ordersService from './service'
import { IOrder } from '../../types';

const { getOrders , getOrdersByUserId , createNewOrder} = ordersService;

class OrdersController {

    async getOrders(req:Request , res:Response){

        try {
            const orders = await getOrders();
            return res.status(200).json(orders);
        } catch (error) {
            return res.status(400).json({ error });
        }
    }

    async getOrdersByUserId(req:Request , res:Response){
        const {id} = req.params
        try {
            const orders = await getOrdersByUserId(id);
            return res.status(200).json(orders);
        } catch (error) {
            return res.status(400).json({ error });
        }
    }

    async createOrder(req:Request, res:Response){
        const newOrder:IOrder = req.body
        try {
            const order = await createNewOrder(newOrder);
            res.status(200).json(order)
        } catch (error) {
            return res.status(400).json({ error });
        }
    }
}



const ordersController = new OrdersController();

export default ordersController;
