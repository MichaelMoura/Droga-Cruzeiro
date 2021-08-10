import { EntityRepository, Repository } from "typeorm";
import { ShoppingSession } from "../entities/ShoppingSession";

@EntityRepository(ShoppingSession)
export class ShoppingSessionRepository extends Repository<ShoppingSession>{

}