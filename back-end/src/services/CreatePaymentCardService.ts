import { getCustomRepository } from "typeorm";
import { Encrypt } from "../../utils/cryptography/Encryp";
import { IPaymentRequest } from "../interfaces/IPaymentCardRequest";
import { PaymentCardRepository } from "../repositories/PaymentCardRepository";

export class CreatePaymentCardService{
    async execute({card_banner,cardholder_cpf,cardholder_name,cvv,expiration_date,number}:IPaymentRequest):Promise<object>{
        const paymentCardRepository = getCustomRepository(PaymentCardRepository);

        const toEncriptCardholderCpf = new Encrypt().encrypt(cardholder_cpf)
    }
}