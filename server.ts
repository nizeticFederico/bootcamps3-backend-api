import express from "express";
import routes from "./Routes";
import dbConnect from "./db/dbConnect";
import { config } from "dotenv";
import { morganPostConfig , morganTinyConfig } from "./loggers/config";
import { authenticate } from "./middlewares/authenticate";



config();

const app = express();
const PORT =  Number(process.env.PORT) ?? 3000;
const HOST = process.env.HOST ?? "localhost";
dbConnect();

app.use(express.json());
app.use(morganTinyConfig, morganPostConfig);

app.use("/api", routes);


app.listen(PORT , HOST , () => {
    console.log(`Connected to port: ${PORT}` );
    console.log(`Server Running at http://${HOST}:${PORT}`);
});

