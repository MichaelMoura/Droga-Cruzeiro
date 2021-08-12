import { Repository, EntityRepository } from "typeorm";
import { ShoppingCart } from "../entities/ShoppingCart";

@EntityRepository(ShoppingCart)
export class ShoppingCartRepository extends Repository<ShoppingCart>{

}