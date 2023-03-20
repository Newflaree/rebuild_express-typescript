import { Request, Response } from 'express';
// Services
import { updateProductByIdService } from '../services';


/*
 * PATH: /api/products/:id
 */
const updateProductById = async ( req: Request, res: Response ) => {

  try {
    const results = await updateProductByIdService();

    //TODO: Remove this example when working it
    const msg = results?.msg;

    res.json({
      ok: true,
      msg
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.UPDATE-PRODUCT-BY-ID]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default updateProductById;
