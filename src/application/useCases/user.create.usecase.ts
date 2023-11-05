import IUserCreateUseCase from './user.create.usecase.interface';
import { Injectable } from '@nestjs/common';
import CreateCommand from './command/create-command';
import IUserService from '../services/user.service.interface';
import UserEntity from 'src/domain/entities/user.entity';

@Injectable()
export default class UserCreateUseCase implements IUserCreateUseCase {
    constructor(private readonly userService: IUserService) { }

    async execute(createCommand: CreateCommand): Promise<UserEntity> {
        const userEntity = new UserEntity(createCommand.name);

        /*
         More actions and code
        */

        return await this.userService.execute(userEntity);
    }
}