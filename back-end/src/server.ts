import express, { Request,Response,NextFunction } from "express"
import morgan from "morgan";
import {router} from "./routes";
import "reflect-metadata";
import "./database";
import "express-async-errors"
import cors from "cors";


const app = express();

app.use(cors());

app.use(morgan("tiny"));

app.use(express.json());

app.use(router)

app.listen(8000, () => console.log("The server is running"))