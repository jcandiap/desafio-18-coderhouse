import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema({
    versionKey: false,
    collection: 'user'
})
export class User {

    @Prop({ required: true })
    email:string;

    @Prop({ required: true })
    alias:string;

    @Prop({ required: true })
    nombre:string;

    @Prop({ required: true })
    apellido:string;

    @Prop({ required: true })
    edad:number;

    @Prop({ required: true })
    password:string;

    @Prop({ required: false })
    avatar:string;

    @Prop({ required: true })
    timestamp:number;

}

export const UserSchema = SchemaFactory.createForClass(User);