import {Request,Response} from "express"
import { IGetUserCardRequest } from "../interfaces/IGetUserCardRequest"
import { GetPaymentcardService } from "../services/GetPaymentCardService"

export class GetPaymentCardController{
    async handle(request:Request,response:Response){
        const id = request.query.id as string;

        const getPaymentCardService = new GetPaymentcardService()

        const userCard = await getPaymentCardService.execute({id})

        return response.send(userCard)
    }
}