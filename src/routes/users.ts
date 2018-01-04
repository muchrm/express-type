import { UserController } from '../controllers/user.controller';
import {resource} from './route'

export default function(router) {
  resource(router,new UserController())
  };
