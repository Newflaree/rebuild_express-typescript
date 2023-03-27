// Express Framework
import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../../interfaces';
// Services
import { createProductCategoryService } from '../services';

/*
 * PATH: /api/product-categories
 * AUTH-REQUIRED: true
 * ADMIN-REQUIRED: true
 */
const createProductCategory = async (
  req: UserAuthRequest,
  res: Response
) => {

  const { name } = req.body;
  const { _id } = req.user;

  try {
    const result = await createProductCategoryService( name, _id );
    const newProductCategory = result?.newProductCategory ;

    res.json({
      ok: true,
      newProductCategory
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
