import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private productsModel: Model<ProductDocument>) {}

  create(createProductDto: CreateProductDto) {
    const createdProduct = new this.productsModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productsModel.find().exec();
  }

  findOne(id: string): Promise<Product> {
    return this.productsModel.findOne({ _id: id }).exec();
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productsModel.findByIdAndUpdate(id, updateProductDto);
  }

  remove(id: string) {
    return this.productsModel.findByIdAndDelete(id);
  }
}
