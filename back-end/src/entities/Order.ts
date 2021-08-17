import {Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column} from "typeorm";
import { ShoppingCart } from "./ShoppingCart";
import { ShoppingSession } from "./ShoppingSession";
import { User } from "./User";
import { v4 as uuid } from "uuid";
import { Delivery } from "./Delivery";
import { PaymentCard } from "./PaymentCard";

@Entity("order")
export class Order {
    @PrimaryColumn()
    id:string;

    @Column()
    user_id:string

    @JoinColumn({name:"user_id"})
    @ManyToOne(()=>User)
    userId:User

    @Column()
    session_id:string;

    @JoinColumn({name:"session_id"})
    @ManyToOne(()=>ShoppingSession)
    sessionId:ShoppingSession;

    @Column()
    purchase_id:string;

    @JoinColumn({name:"purchase_id"})
    @ManyToOne(()=>ShoppingCart)
    purchaseId:ShoppingCart;

    @Column()
    delivery_to:string;

    @JoinColumn({name:"delivery_to"})
    @ManyToOne(()=>Delivery)
    deliveryTo:Delivery;

    @Column()
    payment_id:string;

    @JoinColumn({name:"payment_id"})
    @ManyToOne(()=>PaymentCard)
    paymentId:PaymentCard;

    @Column()
    status:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    constructor(){
        if(this.id){
            this.id = uuid()
        }
    }
}
