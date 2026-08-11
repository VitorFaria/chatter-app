import { Field } from "@nestjs/graphql";
import { Schema } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { AbstractEntity } from "src/common/database/abstract.entity";

@Schema()
export class MessageDocument extends AbstractEntity {
  @Field()
  content: string;

  @Field()
  createdAt: Date;

  @Field()
  userId: Types.ObjectId;
}