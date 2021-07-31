import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePaymentCard1627685676445 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"PaymentCard"
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.
    }

}
