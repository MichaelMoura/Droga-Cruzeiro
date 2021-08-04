import { Router } from "express";
import {Request, Response} from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreatePaymentCardController } from "./controllers/CreatePaymentCardController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateShippingAddressController } from "./controllers/CreateShippingAddressController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetPaymentCardController } from "./controllers/getPaymentCardController";



const router = Router();

//Importando os controllers
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController()
const createProductController = new CreateProductController()
const createShippingAddressController = new CreateShippingAddressController()
const createPaymentCardController =  new CreatePaymentCardController()

const getPaymentCardController = new GetPaymentCardController()

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

//aqui ele vai verificar se o  meu usuário possui um endereco já cadastrado já cadastrado
//sendo necessário pegar o id do usuário. 
router.post("/payment",createPaymentCardController.execute)
router.get("/payment",getPaymentCardController.handle)

//aqui vai cadastrar
router.post("/delivery", createShippingAddressController.handle)


export {router}