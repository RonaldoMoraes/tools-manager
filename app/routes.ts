import express from 'express';
import { ToolsController } from './controllers';
import { ToolsValidator } from './validators';
import { ToolsMiddleware } from './middlewares';

const routes = express.Router();

routes.get("/", (req, res) => {res.send("Don't be shy, take and sit and let's start testing! ☕")});
// Using the middleware ToolsMiddleware
routes.get("/api/tools", [ToolsMiddleware], ToolsController.index);
// Using the validator on ToolsValidator.store
routes.post("/api/tools", [ToolsValidator.store], ToolsController.store);
routes.get("/api/tools/:id", ToolsController.show);
routes.put("/api/tools/:id", ToolsController.update);
routes.delete("/api/tools/:id", ToolsController.destroy);

// MongoDB Simple Tests
routes.get("/api/test", ToolsController.test);

export default routes;