import * as http from "http";
import App from "./app";
import { APILogger } from "./logger/api.logger";

import { connect } from "./config/db.config";

import { RawSQLQueries } from "./dev_utils/raw_sql_queries"

const port = process.env.SERVER_PORT || 5000;

// ********************************************************************
// *********************** For Development ONLY ***********************
// ********************************************************************
if (process.argv[2] === "dbmigrate") {
    let db = connect();
    let force = false;
    if (process.argv[3] === "force") {
        force = true;
    }
    db.sequelize.sync({ force: force }).then(() => {
        if (force) {
            console.log("Droped and re-synced db.");
        } else {
            console.log("Applied migrations to existing data");
        }
    });
} else if (process.argv[2] === "dbpopulate") {
    let raw = new RawSQLQueries();
    raw.runQueries();
} else {
// ********************************************************************
// ********************* Actual app begins here ***********************
// ********************************************************************

    App.set("port", port);
    const server = http.createServer(App);
    server.listen(port);
    
    const logger = new APILogger();
    
    server.on("listening", function(): void {
        const addr = server.address();
        const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
        logger.info(`Listening on ${bind}`, null);
     });
    
    module.exports = App;
}
