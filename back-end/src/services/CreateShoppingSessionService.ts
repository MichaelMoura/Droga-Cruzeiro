import { getCustomRepository } from "typeorm";
import { IShoppingSessionRequest } from "../interfaces/IShoppingSessionRequest";
import { ShoppingSessionRepository } from "../repositories/ShoppingSessionRepository";


export class CreateShoppingSessionService{
    async execute({user_id}:IShoppingSessionRequest){
        const shoppingSessionRepository = getCustomRepository(ShoppingSessionRepository)

        const ShoppingSession = shoppingSessionRepository.create({user_id})

        await shoppingSessionRepository.save(ShoppingSession)

        return ShoppingSession
    }
}