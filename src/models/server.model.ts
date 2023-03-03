class Server {
  private port: string;

  constructor() {
    this.port = '3001';
  }

  listen() {
    console.log( `Listening on port ${ this.port }` );
  }
}

export default Server;
