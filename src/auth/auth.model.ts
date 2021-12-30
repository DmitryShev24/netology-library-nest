// export interface IUser {
//   email: string;
//   password: string;
//   firstName: string;
//   lastName: string;
// }
//
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//
// export type UserDocument = User & Document;
//
// @Schema()
// export class User {
//   @Prop({ required: true })
//   public _id: string;
//
//   @Prop({ required: true })
//   public email: string;
//
//   @Prop({ required: true })
//   public password: string;
//
//   @Prop({ required: true })
//   public firstName: [string];
//
//   @Prop({ required: true })
//   public lastName: string;
// }
//
// export const UserSchema = SchemaFactory.createForClass(User);
