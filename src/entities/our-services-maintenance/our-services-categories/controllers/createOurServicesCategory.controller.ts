// Express Framework
import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../../interfaces';
// Services
import { createOurServicesCategoryService } from '../services';


/*
 * PATH: /api/our-services-categories
 */
const createOurServicesCategory = async ( req: UserAuthRequest, res: Response ) => {
  try {
    const results = await createOurServicesCategoryService();
    const msg = results?.msg;

    res.json({
      ok: true,
      msg
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
