import {Entity, Column, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToOne,PrimaryColumn} from "typeorm";
import { Product } from "./Product";
import { ShoppingSession } from "./ShoppingSession";
import { v4 as uuid } from "uuid";

@Entity("shopping_cart")
export class ShoppingCart {
    @PrimaryColumn()
    id:string;

    @Column()
    session_id:string;

    @JoinColumn({name:"session_id"})
    @ManyToOne(()=>ShoppingSession)
    sessionId:ShoppingSession

    @Column()
    product_id:string;

    @JoinColumn({name:"product_id"})
    @ManyToOne(()=>Product)
    productId:Product;

    @Column()
    quantity:number

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}
