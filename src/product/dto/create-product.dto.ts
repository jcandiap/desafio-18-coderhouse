export class CreateProductDto {
    title: string;
    price: number;
    thumbnail?: string;
    timestamp?: number = new Date().getTime();
}