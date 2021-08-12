import { getCustomRepository } from "typeorm";
import { IShoppinngCartRequest } from "../interfaces/IShoppingCartRequest";
import { ShoppingCartRepository } from "../repositories/ShoppingCartRepository";

export class CreateShoppingCartService{
    async execute({session_id,product_id,quantity}:IShoppinngCartRequest){
        const shoppingCartService = getCustomRepository(ShoppingCartRepository)

        const shoppingCart = shoppingCartService.create({session_id,product_id,quantity})

        await shoppingCartService.save(shoppingCart)

        return shoppingCart
    }
}