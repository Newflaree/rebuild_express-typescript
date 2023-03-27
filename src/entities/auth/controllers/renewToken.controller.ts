import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../interfaces';
// Services
import { renewTokenService } from '../services';

/*
 * PATH: /api/auth/renew-token
 * AUTH-REQUIRED: true
 * ADMIN-REQUIRED: false
 */
const renewToken = async ( req: UserAuthRequest, res: Response ) => {
  const { _id } = req.user;

  try {
    const result = await renewTokenService( _id );

    const user = result?.user;
    const token = result?.token;

    res.json({
      ok: true,
      user,
      token
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.RENEW-TOKEN]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default renewToken;
