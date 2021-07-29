import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDelivery1627582694586 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"delivery",
            columns:[
                {
                    name:"id",
                    type:"varchar",
                    length:"36",
                    isPrimary:true
                },
                {
                    name:"user_id",
                    type:"varchar",
                    length:"36"
                },
                {
                    name:"address",
                    type:"varchar",
                    length:"100"
                },
                {
                    name:"number",
                    type:"smallint"
                    
                },
                {
                    name:"city",
                    type:"varchar",
                    length:"30"

                },
                {
                    name:"state",
                    type:"varchar",
                    length:"20"
                },
                {
                    name:"cep",
                    type:"varchar",
                    length:"9"
                },
                {
                    name:"phone_contact",
                    type:"varchar",
                    length:"12"
                },
                {
                    name:"complement",
                    type:"varchar",
                    length:"50",
                    default:""
                },
            ],
            foreignKeys:[
                {
                    name:"fk_userId_delivery",
                    columnNames:["user_id"],
                    referencedTableName:"users",
                    referencedColumnNames:["id"],
                    onUpdate:"RESTRICT",
                    onDelete:"NO ACTION"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("delivery")
    }

}
