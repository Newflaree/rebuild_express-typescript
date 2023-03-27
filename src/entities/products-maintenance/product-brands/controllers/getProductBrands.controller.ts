// Express Framework
import { Request, Response } from 'express';
// Services
import { getProductBrandsService } from '../services';

/*
 * PATH: /api/product-brands
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 */
const getProductBrands = async (
  req: Request,
  res: Response
) => {
  const { from = 0, limit = 5 } = req.query;
  const condition = { isActive: true };

  try {
    const results = await getProductBrandsService( condition, Number( from ), Number( limit ) );
    
    const totalProductBrands = results?.totalProductBrands;
    const productBrands = results?.productBrands;

    res.json({
      ok: true,
      totalProductBrands,
      productBrands
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
