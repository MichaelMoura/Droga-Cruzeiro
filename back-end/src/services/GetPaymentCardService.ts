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

        const cvv = userCards.map(userCard=>new Encrypt().decrypt(userCard.cvv))

        
        let cardsInfos = [{}]
        for(let i=0;i<cvv.length;i++){
            const obj  = {
                id:userCards[i].id,       
                userId:userCards[i].user_id,       
                cvv:cvv[i],
                cardBanner:userCards[i].card_banner,       
            }

            cardsInfos.push(obj)
        }
        
       

        return cardsInfos

    }
}