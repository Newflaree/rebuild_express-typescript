// Express Framework
import express, { Application } from 'express';
// Cors
import cors from 'cors';
// Interfaces
import { ApiPaths } from '../interfaces';

class Server {
  private app: Application;
  private port: string;
  private apiPaths: ApiPaths;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.apiPaths = {
      auth: '/api/auth'
    }

    // DB Conection
    //TODO:this.dbConnect();
    // Init Methods
    //TODO:this.routes();
    this.middlewares();
  }

  // DB Connect
  async dbConnect() {
    throw Error( 'Method not yet implemented' );
  }

  routes() {
    throw Error( 'Method not yet implemented' );
  }

  middlewares() {
    // Cors 
    this.app.use( cors() );
    // Parse Body
    this.app.use( express.json() );
  }

  listen() {
    this.app.listen( this.port, () => {
      console.clear();
      console.log( `${ '[SERVER.LISTEN]'.green }: Listening on port ${ this.port.green }` );
    });
  }
}

export default Server;
