import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import { HydratedDocument } from "mongoose";
import { Document } from "mongoose";

// export type ProductDocument = HydratedDocument<Product>;
export type ProductDocument = Product & Document;

@Schema({
    versionKey: false
})
export class Product {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    thumbnail: string;

    @Prop({ required: false, default: new Date().getTime() })
    timestamp: number;

}

export const ProductSchema = SchemaFactory.createForClass(Product);