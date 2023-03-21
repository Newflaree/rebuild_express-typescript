// Express Framework
import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../../interfaces';
// Services


/*
 * PATH: /api/our-services-categories
 */
const createOurServicesCategory = async ( req: UserAuthRequest, res: Response ) => {
  try {

    res.json({
      ok: true,
      msg: 'createOurServicesCategory'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-OUR-SERVICES-CATEGORY]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default createOurServicesCategory;
