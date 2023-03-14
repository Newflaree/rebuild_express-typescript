// Express Framework
import { Request, Response } from 'express';
// Services
import { getProductCategoryByIdService } from '../services';

/*
 * PATH: /api/product-categories/:id
 */
const getProductCategoryById = async ( req: Request, res: Response ) => {

  try {

    res.json({
      ok: true,
      msg: 'getProductCategoryById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCT-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default getProductCategoryById;
