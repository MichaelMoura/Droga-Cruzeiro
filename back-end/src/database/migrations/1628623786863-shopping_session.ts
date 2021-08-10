import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class shoppingSession1628623786863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"shopping_session",
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
            foreignKeys:[{
                name:"fk_userID_shoppingSession",
                referencedTableName:"users",
                referencedColumnNames:["id"],
                columnNames:["user_id"],
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("shopping_session")
    }

}
