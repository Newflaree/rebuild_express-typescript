import { Request, Response } from 'express';
// Services
import { createProductService } from '../services';


/*
 * PATH: /api/products
 */
const createProduct = async ( req: Request, res: Response ) => {

  try {
    const results = await createProductService();

    //TODO: Remove this example when working it
    const msg = results?.msg;

    res.json({
      ok: true,
      msg
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.CREATE-PRODUCT]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default createProduct;
