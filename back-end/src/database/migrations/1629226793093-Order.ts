import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Order1629226793093 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
                name:"order",
                columns:[
                    {
                        name:"id",
                        type:"varchar",
                        isPrimary:true,
                        length:"36"
                    },
                    {
                        name:"user_id",
                        type:"varchar",
                        length:"36"
                    },
                    {
                        name:"session_id",
                        type:"varchar",
                        length:"36"
                    },
                    {
                        name:"purchase_id",
                        type:"varchar",
                        length:"36"
                    },
                    {
                        name:"delivery_to",
                        type:"varchar",
                        length:"36"
                    },
                    {
                        name:"payment_id",
                        type:"varchar",
                        length:"36"
                    },
                    {
                        name:"status",
                        type:"varchar",
                        length:"36",
                        default:"pendente"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ],
                foreignKeys:[
                    {
                        name:"fk_userId_order",
                        columnNames:["user_id"],
                        referencedTableName:"users",
                        referencedColumnNames:["id"]
                    },
                    {
                        name:"fk_sessionId_order",
                        columnNames:["session_id"],
                        referencedTableName:"shopping_session",
                        referencedColumnNames:["id"]
                    },
                    {
                        name:"fk_purchaseId_order",
                        columnNames:["user_id"],
                        referencedTableName:"shopping_cart",
                        referencedColumnNames:["id"]
                    },
                    {
                        name:"fk_deliveryTo_order",
                        columnNames:["delivery_to"],
                        referencedTableName:"delivery",
                        referencedColumnNames:["id"]
                    },
                    {
                        name:"fk_paymentId_order",
                        columnNames:["payment_id"],
                        referencedTableName:"payment_card",
                        referencedColumnNames:["id"]
                    }
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("order")
    }

}
