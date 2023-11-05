import UserEntity from 'src/domain/entities/user.entity';

export default abstract class IUserRepository {
    abstract save(userEntity: UserEntity): Promise<UserEntity>;
}