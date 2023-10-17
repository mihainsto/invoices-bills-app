import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/models/user.model';
import { BaseModel } from '../../common/models/base.model';

@ObjectType()
export class Bill extends BaseModel {
  @Field()
  title: string;

  @Field(() => Int)
  amount: number;

  @Field()
  dueDate: Date;

  @Field(() => String, { nullable: true })
  details?: string | null;

  @Field(() => User, { nullable: true })
  user?: User | null;
}
