import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { ReturnedUserDto } from './dto/returned-user.dto';
import { User, UserDocument } from './entities/user.entity';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async register(registerUserDto:RegisterUserDto) {
        const registeredUser = new this.userModel(registerUserDto);
        return new ReturnedUserDto(await registeredUser.save());
    }

    async login(loginUserDto:LoginUserDto) {
        const user = await this.userModel.findOne({ email: loginUserDto.email });
        if( user != null ) {
            if( await bcrypt.compare(loginUserDto.password, user.password) ) {
                return { status: 'ok', user: new ReturnedUserDto(user) };
            }
            return { status: 'error', message: 'Los datos no coinciden para el login' };
        } else {
            return { status: 'error', message: 'El usuario ingresado no existe' };
        }
    }
}