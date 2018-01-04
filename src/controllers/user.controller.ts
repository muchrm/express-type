import { Controller } from "./controller";
import { UserRepository } from "../repositories/user.repository";

export class UserController extends Controller{
    constructor() {
        super(new UserRepository());
    }
}
