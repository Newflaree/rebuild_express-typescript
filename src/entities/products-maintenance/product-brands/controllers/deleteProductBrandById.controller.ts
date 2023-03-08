// Express Framework
import { Request, Response } from 'express';
// Services
import { deleteProductBrandByIdService } from '../services';

/*
 * PATH: /api/product-brands/:id
 */
const deleteProductBrandById = async ( req: Request, res: Response ) => {
  try {

    res.json({
      ok: true,
      msg: 'deleteProductBrandById'
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
