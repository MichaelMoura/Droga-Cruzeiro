import {Request,Response} from "express"
import { CreateShoppingSessionService } from "../services/CreateShoppingSessionService"

export class CreateShoppingSessionController{
    async handle(request:Request,response:Response){
        const {user_id} = request.body

        const createShoppingSessionService =  new CreateShoppingSessionService()

        const shoppingSession = await createShoppingSessionService.execute({user_id})

        return response.json(shoppingSession)
    }
}