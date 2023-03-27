// Express Framework
import { Request, Response } from 'express';
// Services
import { deleteProductCategoryByIdService } from '../services';

/*
 * PATH: /api/product-categories/:id
 * AUTH-REQUIRED: true
 * ADMIN-REQUIRED: true
 */
const deleteProductCategoryById = async (
  req: Request,
  res: Response
) => {

  const { id } = req.params;

  try {
    const results = await deleteProductCategoryByIdService( id );

    const msg = results?.msg;

    res.json({
      ok: true,
      msg
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
