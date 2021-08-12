import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn} from "typeorm";
import { User } from "./User";
import { v4 as uuid } from "uuid";

@Entity("shopping_session")
export class ShoppingSession{
    @PrimaryColumn()
    id:string

    @Column()
    user_id:string;

    @JoinColumn({name:"user_id"})
    @ManyToOne(()=>User)
    userId:User;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;

    constructor(){
        if(!this.id){
            this.id=uuid()
        }
    }
}
