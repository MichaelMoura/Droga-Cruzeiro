import {Request,Response} from "express"
import { IOrderRequest } from "../interfaces/IOrderRequest"
import {CreateOrderService} from "../services/CreateOrderService"

interface IRequest{
    request:Request
    response:Response
}

export class CreateOrderController{
    
    async handle(request:Request,response:Response){
        const {delivery_to,payment_id,purchase_id,session_id,user_id}:IOrderRequest = request.body

        const order = await new CreateOrderService().execute({delivery_to,payment_id,purchase_id,session_id,user_id})
        
        return response.json(order)
    }
}