import { getCustomRepository } from "typeorm";
import { IShippingAddressRequest } from "../interfaces/IShippingAdressRequest";
import { DeliveryRepository } from "../repositories/deliveryRepository";


export class CreateShippingAddressService{
    async execute({address,cep,city,complement,id,number,phone_contact,state,user_id}:IShippingAddressRequest):Promise<Object | Error>{
        const deliveryRepository = getCustomRepository(DeliveryRepository);


        const shippingAddress = deliveryRepository.create({
            address,
            cep,
            city,
            complement,
            id,number,
            phone_contact,
            state,
            user_id
        })

        await deliveryRepository.save(shippingAddress)

        return shippingAddress
    }
}