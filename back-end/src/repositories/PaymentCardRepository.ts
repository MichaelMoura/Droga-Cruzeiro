import { EntityRepository, Repository } from "typeorm";
import { PaymentCard } from "../entities/PaymentCard";

@EntityRepository(PaymentCard)
export class PaymentCardRepository extends Repository<PaymentCard>{

}