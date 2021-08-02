import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import { User } from "./User";
import { v4 as uuid } from "uuid";

@Entity("payment_card")
export class PaymentCard {
    @PrimaryColumn()
    id:string;

    @Column()
    user_id:string;

    @JoinColumn({name:"user_id"})
    @ManyToOne(()=>User)
    userId:User;
    
    @Column()
    cardholder_name:string;

    @Column()
    cardholder_cpf:string;

    @Column()
    number:string;

    @Column()
    expiration_date:string;

    @Column()
    cvv:string;

    @Column()
    card_banner:string;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}
