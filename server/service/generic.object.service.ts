import { ObjectRepository } from '../repository/generic.object.repository';
import { CustomRepositoriesIndex } from '../repository/custom.repository.index';

export class ObjectService {

    private objectRepository: ObjectRepository;

    constructor(ObjectModel) {
        let customIndex = new CustomRepositoriesIndex();
        if (ObjectModel.name in customIndex.repositories) {
            this.objectRepository = new customIndex.repositories[ObjectModel.name]();
        } else {
            this.objectRepository = new ObjectRepository(ObjectModel);
        }
    }

    async getByID(objectId) {
        return await this.objectRepository.getByID(objectId);
    }

    async getAll() {
        return await this.objectRepository.getAll();
    }

    async create(object) {
        return await this.objectRepository.create(object);
    }

    async update(object) {
        return await this.objectRepository.update(object);
    }

    async delete(objectId) {
        return await this.objectRepository.delete(objectId);
    }

}