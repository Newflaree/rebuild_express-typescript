// Express Framework
import { Request, Response } from 'express';
// Services
import { getOurServicesCategoriesService } from '../services';


/*
 * PATH: /api/our-services-categories
 */
const getOurServicesCategories = async ( req: Request, res: Response ) => {
  try {
    const results = await getOurServicesCategoriesService();
    const msg = results?.msg;

    res.json({
      ok: true,
      msg
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-OUR-SERVICES-CATEGORIES]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default getOurServicesCategories;
