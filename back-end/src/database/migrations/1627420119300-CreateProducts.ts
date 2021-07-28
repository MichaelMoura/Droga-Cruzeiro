import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1627420119300 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"products",
                columns:[
                    {
                        name:"id",
                        isPrimary:true,
                        type:"varchar",
                        length:"36",
                    },
                    {
                        name:"product_name",
                        type:"varchar",
                        length:"50"
                    },
                    {
                        name:"description",
                        type:"varchar",
                        length:"255"
                    },
                    {
                        name:"category",
                        type:"varchar",
                        length:"50"
                    },
                    {
                        name:"measurement_units",
                        type:"varchar",
                        length:"30"

                    },
                    {
                        name:"value",
                        type:"float"
                    },
                    {
                        name:"is_available",
                        type:"boolean"
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
                ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products")
    }

}
