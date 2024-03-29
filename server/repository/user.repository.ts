import { connect } from "../config/db.config";
import { APILogger } from '../logger/api.logger';
import { User } from "../model/model.index";
import { ObjectRepository } from "./generic.object.repository";

export class UserRepository extends ObjectRepository{
    /*
    Example custom repository. This looks like the best place to plant
    custom view logic, including eager loading.
    This particular inheritor differ
    */

    private safeAttributes: string[];

    constructor() {
        super(User);
        this.safeAttributes = [ // This can and should be genericized
            'access_level',
            'first_name',
            'last_name',
            'user_name',
            'email'
        ];
    }

    async getByID(id) {
        try {
            const user = await this.objectRespository.findOne({
                attributes: this.safeAttributes,
                where: {
                    user_id: id,
                }
            });
            console.log(`${this.objectLabel}:::`, user);
            return user;
        } catch(err) {
            console.log(err);
            return null;
        }
    }

    async getAll() {
        
        try {
            const users = await this.objectRespository.findAll({
                attributes: this.safeAttributes
            });
            console.log(`${this.objectLabel}:::`, users);
            return users;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

}