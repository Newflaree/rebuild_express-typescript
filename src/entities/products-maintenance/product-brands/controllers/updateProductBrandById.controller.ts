// Express Framework
import { Request, Response } from 'express';
// Services
import { updateProductBrandByIdService } from '../services';

/*
 * PATH: /api/product-brands/:id
 */
const updateProductBrandById = async ( req: Request, res: Response ) => {
  try {

    res.json({
      ok: true,
      msg: 'updateProductBrandById'
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
