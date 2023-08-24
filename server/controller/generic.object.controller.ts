import { APILogger } from '../logger/api.logger';
import { ObjectService } from '../service/generic.object.service';

export class ObjectController {

    private objectService: ObjectService;
    private logger: APILogger;

    constructor(ObjectModel) {
        this.objectService = new ObjectService(ObjectModel);
        this.logger = new APILogger()
    }

    async getByID(objectId) {
        this.logger.info(`Controller: get Objects with ID: ${objectId}`, null)
        return await this.objectService.getByID(objectId)

    }

    async getAll() {
        this.logger.info('Controller: getAll Objects', null)
        return await this.objectService.getAll();
    }

    async create(object) {
        this.logger.info('Controller: create Object', object);
        return await this.objectService.create(object);
    }

    async update(object) {
        this.logger.info('Controller: update Object', object);
        return await this.objectService.update(object);
    }

    async delete(objectId) {
        this.logger.info('Controller: delete Object', objectId);
        return await this.objectService.delete(objectId);
    }
}