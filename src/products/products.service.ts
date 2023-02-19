import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schema/products.model';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productsModel: Model<ProductDocument>) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(): Promise<Product[]> {
    return this.productsModel.find().exec();
  }

  findOne(id: string): Promise<Product> {
    return this.productsModel.findOne({ _id: id }).exec();
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
