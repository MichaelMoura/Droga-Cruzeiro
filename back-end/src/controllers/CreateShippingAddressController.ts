import {Request,Response} from "express";
import { IShippingAddressRequest } from "../interfaces/IShippingAdressRequest";
import { CreateShippingAddressService } from "../services/CreateShippingAddressService";

export class CreateShippingAddressController{
    async handle(request:Request,response:Response){
        const {address,cep,city,complement,id,number,phone_contact,state,user_id,}:IShippingAddressRequest = request.body

        const createShippingAddressService = new CreateShippingAddressService()

        const shippingAddress = await createShippingAddressService.execute({address,cep,city,complement,id,number,phone_contact,state,user_id})

        return response.json(shippingAddress)
    }
}