import { Router } from "express";
import {Request, Response} from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateOrderController } from "./controllers/CreateOrderController";
import { CreatePaymentCardController } from "./controllers/CreatePaymentCardController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateShippingAddressController } from "./controllers/CreateShippingAddressController";
import { CreateShoppingCartController } from "./controllers/CreateShoppingCartController";
import { CreateShoppingSessionController } from "./controllers/CreateShoppingSessionController";
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
const createShoppingSessionController = new CreateShoppingSessionController()
const createShoppingCartController = new CreateShoppingCartController()
const createOrderController = new CreateOrderController() 

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

//Aqui terá a sessão do carrinho e aqui que ele vai nos ajudar a diferenciar as futuras compras
router.post("/cart",createShoppingSessionController.handle)

router.post("/shoppingcart", createShoppingCartController.handle)

router.post("/order", createOrderController.handle)

export {router}