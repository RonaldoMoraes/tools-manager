import express = require("express");
import cors from "cors";
import * as dotenv from "dotenv";
import { errorHandler, notFoundHandler } from "../app/handlers/Exceptions";
import routes from "../app/routes";
import * as mongodb from '../database/mongo-init';

dotenv.config();
const app: express.Application = express();

mongodb.connect();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(errorHandler);
app.use(notFoundHandler);


export default app;