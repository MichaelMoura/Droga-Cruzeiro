import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrder1628375616633 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"order",
            columns:[
                {
                    name:""
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
