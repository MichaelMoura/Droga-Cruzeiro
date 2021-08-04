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
//
        const userCard = userCards.map(card =>new Encrypt().decrypt(card.cvv))
        
        
        const object = {
            cvv:userCard
        }

        return object

    }
}