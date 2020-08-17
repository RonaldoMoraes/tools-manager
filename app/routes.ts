import express from 'express';
import { ExamplesController } from './controllers';
import { ExamplesValidator } from './validators';
import { ExampleMiddleware } from './middlewares';

const routes = express.Router();

const examples = "/api/examples";
routes.get(`${examples}`, [ExampleMiddleware], ExamplesController.index);
routes.post(`${examples}`, [ExampleMiddleware, ExamplesValidator], ExamplesController.store);
routes.get(`${examples}/:id`, [ExampleMiddleware], ExamplesController.show);
// routes.put(`${examples}/:id`, [middlewares.ExampleMiddleware, middlewares.ExampleMiddleware], ExamplesController.update);
// routes.delete(`${examples}/:id`, [middlewares.ExampleMiddleware, middlewares.ExampleMiddleware], ExamplesController.destroy);

export default routes;