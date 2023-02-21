export class ReturnedUserDto {
    nombre:string;
    apellido:string;
    alias:string;
    email:string;
    avatar:string;

    constructor(data?:any) {
        this.nombre = data?.nombre;
        this.apellido = data?.apellido;
        this.alias = data?.alias;
        this.email = data?.email;
        this.avatar = data?.avatar;
    }
}