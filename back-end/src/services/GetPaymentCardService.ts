import { getCustomRepository } from "typeorm";
import { IGetUserCardRequest } from "../interfaces/IGetUserCardRequest";
import { PaymentCardRepository } from "../repositories/PaymentCardRepository";
import { Encrypt } from "../utils/cryptography/Cryptography";

export class GetPaymentcardService{
    async execute(id:IGetUserCardRequest){
        const paymentCardRepository = getCustomRepository(PaymentCardRepository)

        let userCards = await paymentCardRepository.find({
            select:["user_id","cvv","card_banner"],
            where:{
                user_id:id
            }
        })

        let cvv = {};
        for(let userCard of userCards){
            const e = new Encrypt().decrypt(userCard.cvv)
            cvv = e;
            
        }
        
        
        const object = {
            cvv:cvv
        }

        return object

    }
}