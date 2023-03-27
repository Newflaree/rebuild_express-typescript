// Express Framework
import { Request, Response } from 'express';
// Services
import { getOurServicesCategoriesService } from '../services';


/*
 * PATH: /api/our-services-categories
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 */
const getOurServicesCategories = async (
  req: Request,
  res: Response
) => {
  const { from = 0, limit = 5 } = req.query;
  const condition = { isActive: true };
  try {
    const results = await getOurServicesCategoriesService( condition, Number( from ), Number( limit ) );
    const totalOurServicesCategories = results?.totalOurServicesCategories;
    const ourServicesCategories = results?.ourServicesCategories;

    res.json({
      ok: true,
      totalOurServicesCategories,
      ourServicesCategories
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
