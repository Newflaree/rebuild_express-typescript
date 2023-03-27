// Express Framework
import { Request, Response } from 'express';
// Services
import { registerService } from '../services';

/*
 * PATH: /api/auth/register
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 */
const register = async ( req: Request, res: Response ) => {
  const { email, name, password } = req.body;

  try {
    const result = await registerService( email, name, password );

    const newUser = result?.newUser;
    const token = result?.token;

    res.json({
      ok: true,
      newUser,
      token
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.REGISTER]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default register;
