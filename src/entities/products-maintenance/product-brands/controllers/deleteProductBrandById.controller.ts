// Express Framework
import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../../interfaces';
// Services
import { deleteProductBrandByIdService } from '../services';

/*
 * PATH: /api/product-brands/:id
 */
const deleteProductBrandById = async ( req: UserAuthRequest, res: Response ) => {
  const { id } = req.params;

  try {
    const results = await deleteProductBrandByIdService( id );
    const msg = results?.msg;

    res.json({
      ok: true,
      msg
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-PRODUCT-BRAND-BY-ID]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default deleteProductBrandById;
