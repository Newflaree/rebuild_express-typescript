// Express Framework
import { Request, Response } from 'express';
// Services
import { deleteProductCategoryByIdService } from '../services';

/*
 * PATH: /api/product-categories/:id
 */
const deleteProductCategoryById = async ( req: Request, res: Response ) => {

  try {

    res.json({
      ok: true,
      msg: 'deleteProductCategoryById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-PRODUCT-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default deleteProductCategoryById;
