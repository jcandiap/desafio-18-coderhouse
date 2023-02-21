import { NestMiddleware } from "@nestjs/common";
import { RegisterUserDto } from '../dto/register-user.dto';

import * as bcrypt from 'bcrypt';

export class RegisterMiddleware implements NestMiddleware {
    async use(req: any, res: any, next: (error?: any) => void) {

        let user = req?.body;
        if( !Boolean(user) || Object.entries(user).length === 0 ) {
            res.status(400).send({ status: 'error', message: 'No se ha enviado información' });
            return;
        }

        let registerUser = new RegisterUserDto(user);
        const validation = registerUser.validateData();
        if( validation !== null ) {
            res.status(400).send(validation);
            return;
        }

        if( !this.validatePassword(registerUser) ) {
            res.status(400).send({ status: 'error', message: 'Las contraseñas ingresadas no coinciden' });
        }

        registerUser = await this.encriptPassword(registerUser);
        req.body = registerUser;

        next();
    }

    private validatePassword(registerUserDto:RegisterUserDto):boolean {
        if( registerUserDto.password !== registerUserDto.confirmPassword ) {
            return false
        }
        return true;
    }

    private async encriptPassword(registerUser:RegisterUserDto):Promise<RegisterUserDto> {
        const hash = await bcrypt.hash(registerUser.password, 10);
        registerUser.password = hash;
        delete registerUser.confirmPassword;
        return registerUser;
    }
}