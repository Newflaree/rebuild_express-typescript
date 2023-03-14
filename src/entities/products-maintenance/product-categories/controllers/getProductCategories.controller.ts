// Express Framework
import { Request, Response } from 'express';
// Services
import { getProductCategoriesService } from '../services';

/*
 * PATH: /api/product-categories
 */
const getProductCategories = async ( req: Request, res: Response ) => {

  try {

    res.json({
      ok: true,
      msg: 'getProductCategories'
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
