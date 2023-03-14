// Express Framework
import { Request, Response } from 'express';
// Services
import { updateProductCategoryByIdService } from '../services';

/*
 * PATH: /api/product-categories/:id
 */
const updateProductCategoryById = async ( req: Request, res: Response ) => {

  try {

    res.json({
      ok: true,
      msg: 'updateProductCategoryById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-PRODUCT-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default updateProductCategoryById;
