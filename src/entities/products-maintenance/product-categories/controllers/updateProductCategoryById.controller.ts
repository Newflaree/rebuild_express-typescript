// Express Framework
import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../../interfaces';
// Services
import { updateProductCategoryByIdService } from '../services';

/*
 * PATH: /api/product-categories/:id
 */

const updateProductCategoryById = async ( req: UserAuthRequest, res: Response ) => {
  const { name } = req.body;
  const { id } = req.params;
  const { _id } = req.user;

  try {
    const results = await updateProductCategoryByIdService( _id, id, name );

    const updatedProductCategory = results?.updatedProductCategory;

    res.json({
      ok: true,
      updatedProductCategory
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
