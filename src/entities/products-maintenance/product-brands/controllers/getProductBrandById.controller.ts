// Express Framework
import { Request, Response } from 'express';
// Services
import { getProductBrandByIdService } from '../services';

/*
 * PATH: /api/product-brands/:id
 */
const getProductBrandById = async ( req: Request, res: Response ) => {
  try {

    res.json({
      ok: true,
      msg: 'getProductBrandById'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCT-BRAND-BY-ID]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default getProductBrandById;
