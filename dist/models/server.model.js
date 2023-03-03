"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express Framework
const express_1 = __importDefault(require("express"));
// Cors
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.apiPaths = {
            auth: '/api/auth'
        };
        // DB Conection
        //TODO:this.dbConnect();
        // Init Methods
        //TODO:this.routes();
        this.middlewares();
    }
    // DB Connect
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            throw Error('Method not yet implemented');
        });
    }
    routes() {
        throw Error('Method not yet implemented');
    }
    middlewares() {
        // Cors 
        this.app.use((0, cors_1.default)());
        // Parse Body
        this.app.use(express_1.default.json());
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