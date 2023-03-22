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
  const { name } = req.body;
  const uid = req.user._id;

  try {
    const results = await createOurServicesCategoryService( uid, name );
    const newOurServiceCategory = results?.newOurServiceCategory;

    res.json({
      ok: true,
      newOurServiceCategory
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
