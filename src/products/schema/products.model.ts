import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import { HydratedDocument } from "mongoose";
import { Document } from "mongoose";

// export type ProductDocument = HydratedDocument<Product>;
export type ProductDocument = Product & Document;

@Schema()
export class Product {

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    thumbnail: string;

    @Prop({ required: true })
    timestamp: number;

}

export const ProductSchema = SchemaFactory.createForClass(Product);