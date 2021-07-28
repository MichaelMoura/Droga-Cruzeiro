import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { v4 as uuid } from "uuid";


@Entity("products")
export class Product {
    @PrimaryColumn()
    id:string;

    @Column()
    product_name:string;

    @Column()
    description:string;
    
    @Column()
    category:string;

    @Column()
    measurement_units:string;
    
    @Column()
    value:Number;

    @Column()
    is_available:boolean;

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