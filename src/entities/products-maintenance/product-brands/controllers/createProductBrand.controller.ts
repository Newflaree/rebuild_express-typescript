// Express Framework
import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../../interfaces';
// Services
import { createProductBrandService } from '../services';

/*
 * PATH: /api/product-brands
 */
const createProductBrand = async ( req: UserAuthRequest, res: Response ) => {
  const name = req.body.name;
  const { _id } = req.user;

  try {
    const result = await createProductBrandService( name, _id );
    const newProductBrand = result?.newProductBrand;

    res.json({
      ok: true,
      newProductBrand
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
