import { NextFunction, Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../interfaces';

const validateAdminRole = ( req: UserAuthRequest, res: Response, next: NextFunction ) => {
  if ( !req.user ) {
    return res.status( 401 ).json({
      ok: false,
      msg: 'You want to verify the role without validate token before'
    });
  }

  const { role, name } = req.user;
  
  try {
    if ( role !== 'ADMIN_ROLE' ) {
      return res.status( 401 ).json({
        ok: false,
        msg: `El usuario ${ name } no es Administrador`
      });
    }

    next();

  } catch ( err ) {
    console.log( `${ '[MIDDLEWARE.VALIDATE-JWT]'.bgRed }: ${ err }` );
    res.status( 401 ).json({
      ok: false,
      msg: 'Token is invalid'
    });
  }
}

export default validateAdminRole;
