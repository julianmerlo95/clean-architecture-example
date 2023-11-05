import UserEntity from 'src/domain/entities/user.entity';

export default abstract class IUserService {
    abstract execute(userEntity: UserEntity): Promise<UserEntity>;
}