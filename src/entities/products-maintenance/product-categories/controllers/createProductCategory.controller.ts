// Express Framework
import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../../interfaces';
// Services
import { createProductCategoryService } from '../services';

/*
 * PATH: /api/product-categories
 */
const createProductCategory = async ( req: UserAuthRequest, res: Response ) => {

  try {

    res.json({
      ok: true,
      msg: 'createProductCategory'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-PRODUCT-CATEGORY]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default createProductCategory;
