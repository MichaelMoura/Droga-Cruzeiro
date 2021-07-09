import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("users")
export class User {

    @PrimaryColumn({type:"varchar",length:36,})
    readonly id:string;

    @Column({type:"varchar",length:25})
    name:string;

    @Column({type:"varchar",length:50})
    last_name:string;

    @Column({type:"varchar",length:14})
    cpf:string;

    @Column()
    birth_date: Date;

    @Column({type:"varchar",length:45})
    email:string

    @Column({type:"varchar", length:20})
    password:string

    @CreateDateColumn()
    created_at:Date;
    
    @UpdateDateColumn()
    updated_at:Date;

    constructor(){
        this.id = uuid();
    }
}

