import { getCustomRepository } from "typeorm";
import { Encrypt } from "../utils/cryptography/Cryptography";
import { IPaymentRequest } from "../interfaces/IPaymentCardRequest";
import { PaymentCardRepository } from "../repositories/PaymentCardRepository";

export class CreatePaymentCardService{
    async execute({user_id,card_banner,cardholder_cpf,cardholder_name,cvv,expiration_date,number}:IPaymentRequest):Promise<object | Error>{
        const paymentCardRepository = getCustomRepository(PaymentCardRepository);

        const toEncript = new Encrypt()

        const card = paymentCardRepository.create({
            user_id,
            cvv:toEncript.encrypt(cvv),
            card_banner,
            cardholder_name:toEncript.encrypt(cardholder_name),
            cardholder_cpf:toEncript.encrypt(cardholder_cpf),
            number:toEncript.encrypt(number),
            expiration_date:toEncript.encrypt(expiration_date.toString())

        })

        await paymentCardRepository.save(card)

        return card 
    }
}