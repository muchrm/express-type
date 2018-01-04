import * as changeCase from 'change-case';
import * as express from 'express'
const routes = require('require-dir')();

export default function(app) {
  Object.keys(routes).forEach(function(routeName) {
    if(routeName != 'route'){
      var router = express.Router();
      require(`./${routeName}`).default(router)
      app.use('/' + changeCase.paramCase(routeName), router);
    }
  });
};
