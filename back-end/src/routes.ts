import { Router } from "express";
import {Request, Response} from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateUserController } from "./controllers/CreateUserController";



const router = Router();

//Importando os controllers
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController()
const createProductController = new CreateProductController()

//Home da pagina
router.get("/", (request:Request,response:Response)=>{
    response.json({message:"oi",person:"michael"})
})

//Registrar um usuário
router.post("/register",createUserController.handle)

//Logar um usuario e gerar o token
router.post("/login", authenticateUserController.handle)

//Criar um produto
router.post("/product", createProductController.handle)


export {router}