import express from 'express';
import * as controllers from './controllers';
import * as validators from './validators'
import * as middlewares from './middlewares'

const routes = express.Router(); 

const examples = "/examples";
routes.get(`${examples}`, [middlewares.ExampleMiddleware, validators.ExamplesValidator], controllers.ExamplesController.index);
// routes.get(`${examples}/:id`, [testingMiddleware.crazy, examplesValidator.index], ExampleController.show);
// routes.post(`${examples}`, [testingMiddleware.crazy, examplesValidator.index], ExampleController.store);
// routes.put(`${examples}/:id`, [testingMiddleware.crazy, examplesValidator.index], ExampleController.update);
// routes.delete(`${examples}/:id`, [testingMiddleware.crazy, examplesValidator.index], ExampleController.destroy);

export default routes;