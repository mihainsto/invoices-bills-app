import 'reflect-metadata';
import {
  ObjectType,
  registerEnumType,
  HideField,
  Field,
} from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { Post } from '../../posts/models/post.model';
import { BaseModel } from '../../common/models/base.model';
import { Role } from '@prisma/client';
import { Bill } from '../../bills/models/bill.model';
import { Invoice } from '../../invoices/models/invoice.model';

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String, { nullable: true })
  firstname?: string;

  @Field(() => String, { nullable: true })
  lastname?: string;

  @Field(() => Role)
  role: Role;

  @Field(() => [Post], { nullable: true })
  posts?: [Post] | null;

  @Field(() => [Bill], { nullable: true })
  invoices?: [Invoice] | null;

  @Field(() => [Invoice], { nullable: true })
  bills?: [Bill] | null;

  @HideField()
  password: string;
}
