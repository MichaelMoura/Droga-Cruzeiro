import {Request,Response} from "express";
import { CreateShoppingCartService } from "../services/CreateShoppingCartService";

export class CreateShoppingCartController{
    async handle(request:Request,response:Response){
        const {session_id,quantity,product_id} = request.body

        const createShoppingCartService = new CreateShoppingCartService()

        const shoppingCart = await createShoppingCartService.execute({product_id,quantity,session_id})

        return response.json(shoppingCart)
    }
}
