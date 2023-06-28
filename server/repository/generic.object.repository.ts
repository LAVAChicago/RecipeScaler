import { connect } from "../config/db.config";
import { APILogger } from '../logger/api.logger';

export class ObjectRepository {
    // This will not work for more complext operations, such as eager loading
    // Individual repositories will be needed for specific models.

    protected  logger: APILogger;
    protected  db: any = {};
    protected  objectRespository: any;
    public objectLabel: string;
    public objectPrimaryKey: string;

    constructor(ObjectModel) {
        this.db = connect();
        this.objectRespository = this.db.sequelize.getRepository(ObjectModel);
        this.objectLabel = ObjectModel.name;
        this.objectPrimaryKey = this.objectRespository.primaryKeyAttributes[0]
    }

    async getByID(id) {
        try {
            const object = await this.objectRespository.findOne({
                where: {
                    [this.objectPrimaryKey]: id
                }
            });
            console.log(`${this.objectLabel}:::`, object);
            return object;
        } catch(err) {
            console.log(err);
            return null;
        }
    }

    async getAll() {
        
        try {
            const objects = await this.objectRespository.findAll();
            console.log(`${this.objectLabel}:::`, objects);
            return objects;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async create(objectPayload) {
        let data = {};
        try {
            objectPayload.createdate = new Date().toISOString();
            data = await this.objectRespository.create(objectPayload);
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async update(object) {
        let data = {};
        try {
            object.updateddate = new Date().toISOString();
            data = await this.objectRespository.update({...object}, {
                where: {
                    [this.objectPrimaryKey]: object[this.objectPrimaryKey]
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

    async delete(objectId) {
        let data = {};
        try {
            data = await this.objectRespository.destroy({
                where: {
                    [this.objectPrimaryKey]: objectId
                }
            });
        } catch(err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }

}