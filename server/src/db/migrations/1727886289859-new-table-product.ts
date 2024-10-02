import { MigrationInterface, QueryRunner } from "typeorm";

export class NewTableProduct1727886289859 implements MigrationInterface {
    name = 'NewTableProduct1727886289859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" character varying(255), "imageSrc" character varying(1000), "price" numeric(7,2) NOT NULL, "quantity" smallint NOT NULL DEFAULT '1', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_22cc43e9a74d7498546e9a63e77" UNIQUE ("name"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_22cc43e9a74d7498546e9a63e7" ON "product" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_b3234b06e4d16f52b384dfa4dd" ON "product" ("price") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_b3234b06e4d16f52b384dfa4dd"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_22cc43e9a74d7498546e9a63e7"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
