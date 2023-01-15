import './util/module-alias';
import express from 'express';
import bodyParser from 'body-parser';
import router from './server/routes';
export class SetupApplication {
    constructor(port = 3000, app = express()) {
        this.port = port;
        this.app = app;
    }
    init() {
        this.setupExpress();
        this.setupRoutes();
    }
    setupRoutes() {
        this.app.use(router);
    }
    setupExpress() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    start() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
//# sourceMappingURL=app.js.map