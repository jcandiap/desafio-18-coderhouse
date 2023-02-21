export class RegisterUserDto {
    email:string;
    alias:string;
    nombre:string;
    apellido:string;
    edad:number;
    password:string;
    confirmPassword:string;
    avatar?:string;
    timestamp?:number;

    constructor(data?:any) {
        this.email = data?.email;
        this.alias = data?.alias;
        this.nombre = data?.nombre;
        this.apellido = data?.apellido;
        this.edad = data?.edad;
        this.password = data?.password;
        this.confirmPassword = data?.confirmPassword;
        this.avatar = data?.avatar;
        this.timestamp = new Date().getTime();
    }

    validateData():any {
        if( this.email == null || this.email === '' ) {
            return { status: 'error', message: 'Debe ingresar un email' };
        } else if ( this.alias == null || this.alias === '' ) {
            return { status: 'error', message: 'Debe ingresar un alias' };
        } else if ( this.nombre == null || this.nombre === '' ) {
            return { status: 'error', message: 'Debe ingresar un nombre' };
        } else if ( this.apellido == null || this.apellido === '' ) {
            return { status: 'error', message: 'Debe ingresar un apellido' };
        } else if ( this.edad == null || this.edad <= 0 ) {
            return { status: 'error', message: 'Debe ingresar una edad valida' };
        } else if ( this.password == null || this.password === '' ) {
            return { status: 'error', message: 'Debe ingresar una contraseña' };
        } else if ( this.confirmPassword == null || this.confirmPassword === '' ) {
            return { status: 'error', message: 'Debe confirmar su contraseña' };
        }
        return null;
    }
}