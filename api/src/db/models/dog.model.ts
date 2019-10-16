import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  Unique,
  BelongsTo, ForeignKey, Default, PrimaryKey, AllowNull,
} from 'sequelize-typescript';
import { User } from './user.model';

enum Sex {
  Male = 'MALE',
  Bitch = 'BITCH',
}

@Table({
  tableName: 'dogs',
  modelName: 'dog',
})
export class Dog extends Model<Dog> {

  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @AllowNull(false)
  @Column
  fullName: string;

  @AllowNull(true)
  @Column
  image: string;

  @AllowNull(true)
  @Column
  nickname: string;

  @AllowNull(false)
  @Unique
  @Column
  registrationNumber: string;

  @AllowNull(false)
  @Column
  birthday: Date;

  @AllowNull(false)
  @Column(DataType.ENUM(Object.values(Sex)))
  sex: Sex;

  @AllowNull(true)
  @Column(DataType.ARRAY(DataType.STRING))
  title1: string[];

  @AllowNull(true)
  @Column(DataType.ARRAY(DataType.STRING))
  title2: string[];

  @AllowNull(true)
  @Column(DataType.ARRAY(DataType.STRING))
  title3: string[];

  @AllowNull(false)
  @Column
  color: string;

  @AllowNull(true)
  @ForeignKey(() => User)
  @Column
  ownerId: string;

  @BelongsTo(() => User)
  owner: User;

  @AllowNull(true)
  @ForeignKey(() => Dog)
  @Column
  motherId: string;

  @BelongsTo(() => Dog)
  mother: Dog;

  @AllowNull(true)
  @ForeignKey(() => Dog)
  @Column
  fatherId: string;

  @BelongsTo(() => Dog)
  father: Dog;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;

}
