// Express Framework
import { Request, Response } from 'express';
// Services
import { createProductBrandService } from '../services';

/*
 * PATH: /api/product-brands
 */
const createProductBrand = async ( req: Request, res: Response ) => {
  try {

    res.json({
      ok: true,
      msg: 'createProductBrand'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-PRODUCT-BRAND]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default createProductBrand;
