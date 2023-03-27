import { Request, Response } from 'express';
// Services
import { getProductsService } from '../services';


/*
 * PATH: /api/products
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 */
const getProducts = async (
  req: Request,
  res: Response
) => {

  const { from = 0, limit = 5 } = req.query;
  const condition = { isActive: true };

  try {
    const results = await getProductsService( condition, Number( from ), Number( limit ) );

    const totalProducts = results?.totalProducts;
    const products = results?.products;

    res.json({
      ok: true,
      totalProducts,
      products
    })

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCTS]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default getProducts;
