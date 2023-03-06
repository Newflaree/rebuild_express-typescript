import { Request, Response } from 'express';

/*
 * PATH: /api/auth/login
 */
const login = async ( req: Request, res: Response ) => {
  try {

    res.json({
      ok: true,
      msg: 'login'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER-LOGIN]'.bgRed }: ${ err }` );
  }
}

export default login;
