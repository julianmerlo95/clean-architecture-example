import IUserRepository from 'src/infrastructure/repository/user.repository.interface';
import { Injectable } from '@nestjs/common';
import IUserService from './user.service.interface';
import UserEntity from 'src/domain/entities/user.entity';

@Injectable()
export default class UserService implements IUserService {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute(userEntity: UserEntity): Promise<UserEntity> {
        return await this.userRepository.save(userEntity);
    }
}