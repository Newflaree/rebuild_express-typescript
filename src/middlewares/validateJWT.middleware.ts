import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
// Interfaces
import { UserAuthRequest } from '../interfaces';
// Models
import { User } from '../global-models';

const validateJWT = async ( req: UserAuthRequest, res: Response, next: NextFunction ) => {
  const token = req.header( 'x-token' );

  if ( !token ) {
    return res.status( 401 ).json({
      ok: false,
      msg: 'There is no token is the request'
    });
  }

  try {
    const { uid }: any = jwt.verify( token, process.env.SECRET_KEY || '' );
    const user = await User.findById({ _id: uid }) || { isActive: false }

    if ( !user || !user.isActive ) {
      res.status( 401 ).json({
        ok: false,
        msg: 'Token is invalid'
      });
    }

    req.user = user;

    next();

  } catch ( err ) {
    console.log( `${ '[MIDDLEWARE.VALIDATE-JWT]'.bgRed }: ${ err }` );
    res.status( 401 ).json({
      ok: false,
      msg: 'Token is invalid'
    });

  }
}

export default validateJWT;
