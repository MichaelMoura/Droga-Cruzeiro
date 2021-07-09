import { Router } from "express";
import {Request, Response} from "express"
import { UserCreateController } from "./controllers/UserCreateController";



const router = Router();

//Importando os controllers
const userCreateController = new UserCreateController();

router.get("/", (request:Request,response:Response)=>{
    response.send(__dirname);
})

//Registrar um usuário
router.post("/register",userCreateController.handle)


export {router}