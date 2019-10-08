import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  Unique,
  BelongsTo, ForeignKey, Default, PrimaryKey,
} from 'sequelize-typescript';
import { User } from './user.model';

@Table({
  tableName: 'dogs',
  modelName: 'dog',
})
export class Dog extends Model<Dog> {

  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @Column
  fullName: string;

  @Unique
  @Column
  registrationNumber: string;

  @Column
  birthday: Date;

  @Column(DataType.ENUM(['MALE', 'BITCH']))
  sex: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

  @ForeignKey(() => User)
  @Column
  ownerId: string;

  @BelongsTo(() => User)
  owner: User;
}
