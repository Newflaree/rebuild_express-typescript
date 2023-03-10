// Express Framework
import express, { Application } from 'express';
// Cors
import cors from 'cors';
// Database Config
import { dbConnection } from '../config';
// Interfaces
import { ApiPaths } from '../interfaces';
// Routes
import {
  authRoutes,
  productbrandsRoutes
} from '../entities/routes';

class Server {
  private app: Application;
  private port: string;
  private apiPaths: ApiPaths;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.apiPaths = {
      auth: '/api/auth',
      productBrands: '/api/product-brands'
    }

    // DB Conection
    this.dbConnect();
    // Init Methods
    this.middlewares();
    this.routes();
  }

  // DB Connect
  async dbConnect() {
    await dbConnection();
  }

  routes() {
    this.app.use( this.apiPaths.auth, authRoutes );
    this.app.use( this.apiPaths.productBrands, productbrandsRoutes );
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
      console.log( `${ '[SERVER.LISTEN]'.bgGreen }: Listening on port ${ this.port.green }` );
    });
  }
}

export default Server;
