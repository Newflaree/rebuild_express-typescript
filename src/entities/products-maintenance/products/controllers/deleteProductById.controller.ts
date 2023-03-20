import { Request, Response } from 'express';
// Services
import { deleteProductByIdService } from '../services';


/*
 * PATH: /api/products/:id
 */
const deleteProductById = async ( req: Request, res: Response ) => {

  try {
    const results = await deleteProductByIdService();

    //TODO: Remove this example when working it
    const msg = results?.msg;

    res.json({
      ok: true,
      msg
    });

  } catch ( err ) {
    console.log( `${ '[CONTROLLER.DELETE-PRODUCT-BY-ID]'.bgRed }: ${ err }` );
    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Admin.'
    });
  }
}

export default deleteProductById;
