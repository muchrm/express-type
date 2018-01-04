import { Repository } from "./repository";
import { User } from "../models/user.model";

export class UserRepository extends Repository {
    constructor() {
        super(new User())
    }

}
