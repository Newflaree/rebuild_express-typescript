import { Request, Response } from 'express';

/*
 * PATH: /api/auth/renew-token
 */
const renewToken = async ( req: Request, res: Response ) => {
  try {

    res.json({
      ok: true,
      msg: 'renewToken'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER-RENEW-TOKEN]'.bgRed }: ${ err }` );
  }
}

export default renewToken;
