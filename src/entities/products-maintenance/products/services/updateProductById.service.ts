// Helpers
import {
  productPriceFormater,
  productStockValidator
} from '../../../../helpers';
// Models
import { Product } from '../models';


const updateProductByIdService = async (
  uid: string,
  id: string,
  name: string,
  description: string,
  img: string,
  stock: number,
  price: string,
  brand: string,
  category: string
) => {
  const updateProductData = {
    name: name.toUpperCase(),
    description,
    img,
    stock: productStockValidator( stock ),
    price: productPriceFormater( price ),
    user: uid,
    brand,
    category
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate( id, updateProductData, { new: true })
      .populate( 'user', 'name' )
      .populate( 'brand', 'name' )
      .populate( 'category', 'name' )

    return {
      updatedProduct
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-PRODUCT-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default updateProductByIdService;
