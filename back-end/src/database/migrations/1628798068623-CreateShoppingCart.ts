import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateShoppingCart1628798068623 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"shopping_cart",
                    columns:[
                        {
                            name:"id",
                            type:"varchar",
                            isPrimary:true,
                            length:"36"
                        },
                        {
                            name:"session_id",
                            type:"varchar",
                            length:"36",
                        },
                        {
                            name:"product_id",
                            type:"varchar",
                            length:"36"
                        },
                        {
                            name:"quantity",
                            type:"tinyint"
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
                            name:"fk_sessionId_shoppingSession",
                            columnNames:["session_id"],
                            referencedTableName:"shopping_session",
                            referencedColumnNames:["id"]
                        },
                        {
                            name:"fk_productId_shoppingSession",
                            columnNames:["product_id"],
                            referencedTableName:"products",
                            referencedColumnNames:["id"]
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("shopping_cart")
    }

}
