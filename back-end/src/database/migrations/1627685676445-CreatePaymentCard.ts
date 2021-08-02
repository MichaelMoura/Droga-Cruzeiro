import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePaymentCard1627685676445 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"payment_card",
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
                            length:"36",
                        },
                        {
                            name:"cardholder_name",
                            type:"varchar",
                            length:"100",
                        },
                        {
                            name:"cardholder_cpf",
                            type:"varchar",
                            length:"60"
                        },
                        {
                            name:"number",
                            type:"varchar",
                            length:"64"
                        },
                        {
                            name:"expiration_date",
                            length:"52",
                            type:"varchar"
                        },
                        {
                            name:"cvv",
                            type:"varchar",
                            length:"38",
                        },
                        {
                            name:'card_banner',
                            type:"varchar",
                            length:"10"
                        }
                    ],
                    foreignKeys:[{
                        name:"fk_userId_payment",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["user_id"],
                        onUpdate:"RESTRICT",
                        onDelete:"NO ACTION"

                    }] 
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("payment_card")
    }

}
