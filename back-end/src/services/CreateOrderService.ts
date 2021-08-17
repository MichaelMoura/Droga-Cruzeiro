import { OrderRepository } from "../repositories/OrderRepository";
import { IOrderRequest } from "../interfaces/IOrderRequest";
import { getCustomRepository } from "typeorm";

export class CreateOrderService{

    private repository = getCustomRepository(OrderRepository)

    async execute({session_id,user_id,purchase_id,delivery_to,payment_id}:IOrderRequest){

        const order = this.repository.create({
            session_id,
            user_id,
            purchase_id,
            delivery_to,
            payment_id
        })

        await this.repository.save(order)

        return order
    }
}

