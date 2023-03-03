"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express Framework
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
    }
    listen() {
        this.app.listen(this.port, () => {
            console.clear();
            console.log(`${'[SERVER.LISTEN]'.green}: Listening on port ${this.port.green}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.model.js.map