// Express Framework
import { Request, Response } from 'express';
// Services
import { getProductBrandsService } from '../services';

/*
 * PATH: /api/product-brands
 */
const getProductBrands = async ( req: Request, res: Response ) => {
  try {

    res.json({
      ok: true,
      msg: 'getProductBrands'
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCT-BRANDS]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default getProductBrands;
