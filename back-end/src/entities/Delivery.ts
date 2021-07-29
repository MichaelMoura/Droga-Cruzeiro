import {Column, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("delivery")
export class Delivery {
    @PrimaryColumn()
    id:string;

    @Column()
    user_id:string;

    @Column()
    address:string;

    @Column()
    number:number;

    @Column()
    city:string;

    @Column()
    state:string;

    @Column()
    cep:string;

    @Column()
    phone_contact:string;

    @Column()    
    complement:string;
    
    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}
