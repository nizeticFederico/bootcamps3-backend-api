import { Request, Response, NextFunction } from 'express';
import jwt  from 'jsonwebtoken';
import { config } from "dotenv";

config();


  export  function authenticate(req: Request, res: Response, next:NextFunction) {

    const token = req.header("authtoken");
  
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        userId: string,
        email: string,
        role:string
      };

      const userId = decoded.userId;
      const email = decoded.email;
      const role = decoded.role

      if (!decoded) {
        res.status(401).json("You need to be logged")
      }else {
        req.body.userId = userId;
        req.body.email = email;
        req.body.role = role;
        next();
      }
  
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
 