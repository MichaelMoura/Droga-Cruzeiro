import { EntityRepository, Repository } from "typeorm";
import { Delivery } from "../entities/Delivery";

@EntityRepository(Delivery)
export class DeliveryRepository extends Repository<Delivery>{
    
}