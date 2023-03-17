// Express Framework
import { Request, Response } from 'express';
// Services
import { getProductCategoriesService } from '../services';

/*
 * PATH: /api/product-categories
 */
const getProductCategories = async ( req: Request, res: Response ) => {
  const { from = 0, limit = 5 } = req.query;
  const condition = { isActive: true };

  try {
    const results = await getProductCategoriesService( condition, Number( from ), Number( limit ) );

    const totalProductCategories = results?.totalProductCategories;
    const productCategories = results?.productCategories;

    res.json({
      ok: true,
      totalProductCategories,
      productCategories
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCT-CATEGORIES]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default getProductCategories;
