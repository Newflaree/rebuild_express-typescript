import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../../interfaces';
// Services
import { createProductService } from '../services';


/*
 * PATH: /api/products
 */
const createProduct = async ( req: UserAuthRequest, res: Response ) => {
  const uid = req.user?.id;
  const {
    name,
    description,
    img,
    stock,
    price,
    brand,
    category
  } = req.body;

  try {
    const results = await createProductService(
      uid,
      name,
      description,
      img,
      stock,
      price,
      brand,
      category
    );

    const newProduct = results?.newProduct;

    res.json({
      ok: true,
      newProduct
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
