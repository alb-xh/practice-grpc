import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Index() // Search by name
  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @Column({ type: 'varchar', nullable: true, length: 255 })
  description?: string;

  @Column({ type: 'varchar', nullable: true, length: 1000 })
  imageSrc?: string;

  @Index() // Sort by price
  @Column({ type: 'decimal', precision: 7, scale: 2 }) // Max - 10K$
  price: number;

  @Column({ type: 'smallint', default: 1 })
  quantity: number = 1;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
