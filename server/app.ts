import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { APILogger } from "./logger/api.logger";
// import { ObjectController } from "./controller/generic.object.controller";
// import * as Models from "./model/model.index";
import 'dotenv/config'

import * as routeIndex from "./routes/route.index";

class App {

    public express: express.Application;
    public logger: APILogger;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new APILogger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(cors());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        this.express.use("/api/user", routeIndex.userRouter);
        this.express.use("/api/recipe", routeIndex.recipeRouter);

        this.express.get("/", (req, res, next) => {
            res.send("Typescript App up and running.");
        });

        // Health Check for Server
        this.express.get("/health", (req, res, next) => {
            this.logger.info("Health check for server", {});
            res.json({msg:"Server is alive."});
        });

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("This URL is not valid.");
        });
    }
}

export default new App().express;