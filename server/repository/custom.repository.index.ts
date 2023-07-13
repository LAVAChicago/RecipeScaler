import { UserRepository } from "./user.repository";

export class CustomRepositoriesIndex {
    public repositories: any = {};
    constructor() {
        this.repositories = {
            User: UserRepository
        }
    }
}