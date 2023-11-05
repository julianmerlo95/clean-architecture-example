import IUserCreateUseCase from './application/useCases/user.create.usecase.interface';
import UserCreateUseCase from './application/useCases/user.create.usecase';
import UserController from './infrastructure/handler/user.controller';
import { Module } from '@nestjs/common';
import UserService from './application/services/user.service';
import IUserService from './application/services/user.service.interface';
import UserRepository from './infrastructure/repository/user.repository';
import IUserRepository from './infrastructure/repository/user.repository.interface';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: IUserService, useClass: UserService,
    },
    UserRepository,
    {
      provide: IUserRepository, useClass: UserRepository,
    },
    UserCreateUseCase,
    {
      provide: IUserCreateUseCase, useClass: UserCreateUseCase,
    },
  ],
  exports: [
    IUserCreateUseCase,
    IUserService,
    IUserRepository
  ]
})
export class AppModule { }
