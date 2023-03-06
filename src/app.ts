export * from 'colors';
// Environment Config
import dotenv from 'dotenv';
dotenv.config();
// Server Model
import { Server } from './global-models';

// Server Instance
const server = new Server;
server.listen();
