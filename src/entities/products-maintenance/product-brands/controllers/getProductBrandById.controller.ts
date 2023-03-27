// Express Framework
import { Request, Response } from 'express';
// Services
import { getProductBrandByIdService } from '../services';

/*
 * PATH: /api/product-brands/:id
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 */
const getProductBrandById = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  try {
    const results = await getProductBrandByIdService( id );

    const productBrand = results?.productBrand;

    res.json({
      ok: true,
      productBrand
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
