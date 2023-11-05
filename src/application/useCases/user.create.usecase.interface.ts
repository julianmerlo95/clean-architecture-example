import CreateCommand from './command/create-command';
import UserEntity from 'src/domain/entities/user.entity';

export default abstract class IUserCreateUseCase {
    abstract execute(createCommand: CreateCommand): Promise<UserEntity>;
}