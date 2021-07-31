import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("delivery")
export class Delivery {
    @PrimaryColumn()
    id:string;

    @Column()
    user_id:string;

    @JoinColumn({name:"user_id"})
    @ManyToOne(()=>User)
    user:User;

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
