import { SetupApplication } from "../app";
class Server {
    static start() {
        const app = new SetupApplication(3333);
        app.init();
        app.start();
    }
}
Server.start();
//# sourceMappingURL=server.js.map