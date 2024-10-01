import { Request , Response } from "express";
import navService from "./service";
import { INav } from "../../types";

const {getNav, createNav} = navService;

class NavController {

    async getNav(req:Request , res:Response) {
        
        try {
            const navs = await getNav();
            return res.status(200).json();
        } catch (error) {
            return res.status(401).json({error});
        }

    }

    async createNav(req:Request, res:Response){
        const nav:INav = req.body
        try {
            const newNav = await createNav(nav);
            return res.status(200).json(nav);
        } catch (error) {
            return res.status(401).json({error});
        }
    }


}

const navController = new NavController();


export default navController;