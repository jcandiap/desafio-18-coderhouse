export class CreateProductDto {
    title: string;
    price: number;
    thumbnail?: string;
    timestamp?: number = new Date().getTime();
}

//TODO: Verificar porque no puedo ingresar un valor por Postman sin una propiedad