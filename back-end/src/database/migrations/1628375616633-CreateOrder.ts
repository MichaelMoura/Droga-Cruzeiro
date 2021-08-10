import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrder1628375616633 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"order",
            columns:[
                {
                    name:"id",
                    type:"varchar",
                    isPrimary:true
                },
                {
                    name:"user_id",
                    type:"varchar"
                },
                {
                    name:"deliveryTo",
                    type:"varchar"
                },
                {
                    name:"paymentId",
                    type:"varchar"
                },
                {
                    name:"shoppingCart",
                    type:"varchar"
                },
                {
                    name:"totalValue",
                    type:"float"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("order")
    }

}
