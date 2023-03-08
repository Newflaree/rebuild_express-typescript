// Express Framework
import { Request, Response } from 'express';
// Services
import { loginService } from '../services';

/*
 * PATH: /api/auth/login
 */
const login = async ( req: Request, res: Response ) => {
  const { email, password } = req.body;

  try {
    const result = await loginService( email, password );

    const statusCode = result?.statusCode || 400;
    const ok = result?.ok;
    const msg = result?.msg;
    const token = result?.token;
    const logedUser = result?.logedUser

    res.status( statusCode ).json({
      ok,
      msg,
      token,
      logedUser
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER-LOGIN]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default login;
