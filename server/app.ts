import bodyParser from "body-parser";
import express from "express";
import { APILogger } from "./logger/api.logger";
// import { ObjectController } from "./controller/generic.object.controller";
// import * as Models from "./model/model.index";
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import 'dotenv/config'

import { userRouter } from "./routes/user.routes"

class App {

    public express: express.Application;
    public logger: APILogger;

    /* Swagger files start */
    private swaggerFile: any = (process.cwd()+"/swagger/swagger.json");
    private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
    private customCss: any = fs.readFileSync((process.cwd()+"/swagger/swagger.css"), 'utf8');
    private swaggerDocument = JSON.parse(this.swaggerData);
    /* Swagger files end */


    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new APILogger();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        this.express.use("/api/user", userRouter);

        this.express.get("/", (req, res, next) => {
            res.send("Typescript App up and running.");
        });

        // swagger docs
        this.express.use('/api/docs', swaggerUi.serve,
            swaggerUi.setup(this.swaggerDocument, null, null, this.customCss));

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("This URL is not valid.");
        });
    }
}

export default new App().express;