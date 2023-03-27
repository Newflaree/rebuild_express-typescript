import { Response } from 'express';
// Interfaces
import { UserAuthRequest } from '../../../../interfaces';
// Services
import { updateProductByIdService } from '../services';


/*
 * PATH: /api/products/:id
 * AUTH-REQUIRED: true
 * ADMIN-REQUIRED: true
 */
const updateProductById = async (
  req: UserAuthRequest,
  res: Response
) => {

  const uid = req.user._id;
  const { id } = req.params;
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
    const results = await updateProductByIdService(
      uid,
      id,
      name,
      description,
      img,
      stock,
      price,
      brand,
      category
    );

    const updatedProduct = results?.updatedProduct;

    res.json({
      ok: true,
      updatedProduct
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
