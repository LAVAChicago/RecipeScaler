import { ObjectRepository } from '../repository/generic.object.repository';

export class ObjectService {

    private objectRepository: ObjectRepository;

    constructor(ObjectModel) {
        this.objectRepository = new ObjectRepository(ObjectModel);
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