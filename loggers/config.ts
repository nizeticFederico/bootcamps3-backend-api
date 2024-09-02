import morgan from "morgan";
import { Request , Response } from "express";

const morganTinyConfig =  morgan('tiny', {
    skip: function(req, res) {
      return req.method === 'POST';
    }
  })

morgan.token('postFormat', (req:Request, res:Response) => {
    if (req.method === 'POST') {
      return `${JSON.stringify(req.body)}`;
    }
    return '';
  });

const morganPostConfig = morgan(':method :url :status :res[content-length] - :response-time ms :postFormat', {
    skip: function(req, res) {
      return req.method !== 'POST';
    },
    stream: process.stdout
  });

  export  {morganTinyConfig , morganPostConfig}