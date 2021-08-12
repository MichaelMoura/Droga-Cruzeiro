import { getCustomRepository } from "typeorm";
import { IShoppingSessionRequest } from "../interfaces/IShoppingSessionRequest";
import { ShoppingSessionRepository } from "../repositories/ShoppingSessionRepository";


export class CreateShoppingSessionService{
    async execute({user_id}:IShoppingSessionRequest){
        const shoppingSessionRepository = getCustomRepository(ShoppingSessionRepository)

        const shoppingSession = shoppingSessionRepository.create({user_id})

        await shoppingSessionRepository.save(shoppingSession)

        return shoppingSession
    }
}