import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1625521328960 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"users",
                    columns:[
                        {
                            name:"id",
                            type:"varchar",
                            isPrimary:true,
                            length:"36",
                        },
                        {
                            name:"name",
                            type:"varchar",
                            length:"25"
                        },
                        {
                            name:"last_name",
                            type:"varchar",
                            length:"50"
                            
                        },
                        {
                            name:"cpf",
                            type:"varchar",
                            isUnique:true,
                            length:"14"
                        },
                        {
                            name:"birth_date",
                            type:"date",
                        },
                        {
                            name:"email",
                            type:"varchar",
                            isUnique:true,
                            length:"45"
                        },
                        {
                            name:"password",
                            type:"varchar",
                            length:"20"
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
                }
            )
            )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("User")
    }

}