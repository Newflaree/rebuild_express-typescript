// Express Framework
import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../../interfaces';
// Services
import { updateProductBrandByIdService } from '../services';

/*
 * PATH: /api/product-brands/:id
 */
const updateProductBrandById = async ( req: UserAuthRequest, res: Response ) => {
  const { name } = req.body;
  const { id } = req.params;
  const { _id } = req.user;

  try {
    const results = await updateProductBrandByIdService( _id, id, name );
    const productBrandUpdated = results?.productBrandUpdated;

    res.json({
      ok: true,
      productBrandUpdated
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-PRODUCT-BRAND-BY-ID]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default updateProductBrandById;
