import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreatePosts1595341120888 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'posts',
            columns: [
                {name: 'id', isGenerated: true, type: 'int', isPrimary: true, generationStrategy: "increment"},
                {name: 'title', type: 'varchar'},
                {name: 'content', type: 'text'},
                {name: 'author_id', type:'int'}
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('posts')
    }

}
