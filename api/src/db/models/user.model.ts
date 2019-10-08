import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  Unique, HasMany, PrimaryKey, Default, DataType, AllowNull, IsEmail,
} from 'sequelize-typescript';
import { Dog } from '.';

@Table({
  tableName: 'users',
  modelName: 'user',
})
export class User extends Model<User> {

  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @Column
  fullName: string;

  @Unique
  @AllowNull(false)
  @IsEmail
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

  @HasMany(() => Dog)
  dogs: Dog[];
}
