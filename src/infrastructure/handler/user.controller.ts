import { Controller, Post, Req } from '@nestjs/common';
import IUserCreateUseCase from 'src/application/useCases/user.create.usecase.interface';
import CreateRequestDto from './dto/create.request.dto';
import UserEntity from 'src/domain/entities/user.entity';

@Controller("/user")
export default class UserController {
    constructor(private readonly userCreateUseCase: IUserCreateUseCase) { }

    @Post("/")
    async userCreate(@Req() req: CreateRequestDto): Promise<UserEntity> {
        const createCommand = {
            name: req.body.name
        };
        return this.userCreateUseCase.execute(createCommand);
    }
}
