import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  Unique,
} from 'sequelize-typescript';

@Table({
  tableName: 'dogs',
  modelName: 'dog'
})
export class Dog extends Model<Dog> {

  @Column
  fullName: string;

  @Unique
  @Column
  registrationNumber: string;

  @Column
  birthday: Date;

  @Column(DataType.ENUM(['Male', 'Bitch']))
  sex: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;
}
