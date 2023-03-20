import { Request, Response } from 'express';
// Services
import { getProductsService } from '../services';


/*
 * PATH: /api/products
 */
const getProducts = async ( req: Request, res: Response ) => {

  try {
    const results = await getProductsService();

    //TODO: Remove this example when working it
    const msg = results?.msg;

    res.json({
      ok: true,
      msg
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.GET-PRODUCTS]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default getProducts;
