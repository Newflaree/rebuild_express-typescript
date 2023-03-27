import { Request, Response } from 'express';
// Services
import { getProductByIdService } from '../services';


/*
 * PATH: /api/products/:id
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 */
const getProductById = async (
  req: Request,
  res: Response
) => {

  const { id } = req.params;

  try {
    const results = await getProductByIdService( id );

    const currentProduct = results?.currentProduct;

    res.json({
      ok: true,
      currentProduct
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCT-BY-ID]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default getProductById;
