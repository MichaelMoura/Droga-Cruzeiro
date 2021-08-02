import {Request,Response} from "express"
import { IPaymentRequest } from "../interfaces/IPaymentCardRequest"
import { CreatePaymentCardService } from "../services/CreatePaymentCardService"

export class CreatePaymentCardController{
    async execute(request:Request,response:Response){
        const {card_banner,cardholder_cpf,cardholder_name,cvv,expiration_date,number,user_id}:IPaymentRequest = request.body

        const createPaymentCardService = new CreatePaymentCardService()

        const card = await createPaymentCardService.execute({card_banner,cardholder_cpf,cardholder_name,cvv,expiration_date,number,user_id})

        return response.send(card)
    }
}