import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from "dotenv";

config();


export  function isAdmin(req:Request , res:Response, next: NextFunction){
    const token = req.header("authtoken");
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        role:string
      };
      const role = decoded.role;
      
      if (role !== "admin") {
        res.status(401).json("You have not permissions")
      }else {
        next();
      }
  
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }

}