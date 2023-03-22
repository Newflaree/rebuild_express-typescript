// Express Framework
import { Request, Response } from 'express';
// Services
import { getOurServicesCategoryByIdService } from '../services';


/*
 * PATH: /api/our-services-categories/:id
 */
const getOurServicesCategoryById = async ( req: Request, res: Response ) => {
  const { id } = req.params;
  try {
    const results = await getOurServicesCategoryByIdService( id );
    const currentOurServicesCategory = results?.currentOurServicesCategory;

    res.json({
      ok: true,
      currentOurServicesCategory
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-OUR-SERVICES-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default getOurServicesCategoryById;
