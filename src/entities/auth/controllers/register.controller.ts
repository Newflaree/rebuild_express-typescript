import { Request, Response } from 'express';

/*
 * PATH: /api/auth/register
 */
const register = async ( req: Request, res: Response ) => {
  try {

    res.json({
      ok: true,
      msg: 'register'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER-REGISTER]'.bgRed }: ${ err }` );
  }
}

export default register;
