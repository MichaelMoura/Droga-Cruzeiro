import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePaymentCard1627685676445 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"PaymentCard",
                    columns:[
                        {
                            name:"nome do titular"
                            type:"varchar"
                        },
                        {
                            name:"cpf do titular"
                            type:"varchar"
                        },
                        {
                            name:"numero"
                            type:"varchar"
                        },
                        {
                            name:"data de vencimento"
                            type:"date"
                        },
                        {
                            name:"cvv"
                            type:"varchar"
                        },
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.
    }

}
