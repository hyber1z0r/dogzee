import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  Unique, HasMany, PrimaryKey, Default, DataType, AllowNull, IsEmail, BeforeCreate, BeforeUpdate,
} from 'sequelize-typescript';
import { Dog } from '.';
import { hash, compare } from 'bcrypt';

const SALT_ROUNDS = 10;

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

  @BeforeUpdate
  @BeforeCreate
  static async hashPassword(instance: User): Promise<void> {
    if (!instance.changed('password')) {
      return void 0;
    }
    instance.password = await hash(instance.password, SALT_ROUNDS);
  }

  async comparePassword(candidatePassword: string): Promise<boolean> {
    return await compare(candidatePassword, this.password);
  }
}
