import UserEntity from 'src/domain/entities/user.entity';
import IUserRepository from './user.repository.interface';
import { UserDbEntity } from './entities/user.db.entity';

export default class UserRepository implements IUserRepository {

    async save(userEntity: UserEntity): Promise<UserEntity> {
        const userDbEntity = this.mapUserEntityToDBEntity(userEntity);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Save userDbEntity in database
                resolve(userDbEntity);
            }, 300);
        }).then((res: UserEntity) => {
            const mapSavedEntity = this.mapUserDBEntityToDomainEntity(new UserDbEntity(res.name));
            return mapSavedEntity;
        });
    }

    private mapUserEntityToDBEntity(userEntity: UserEntity): UserDbEntity {
        return new UserDbEntity(userEntity.name); // Mapped userEntity properties to userDbEntity
    }

    private mapUserDBEntityToDomainEntity(userEntitySaved: UserDbEntity): UserEntity {
        return new UserEntity(userEntitySaved.name); // Mapped userDbEntity properties to userEntity
    }
}