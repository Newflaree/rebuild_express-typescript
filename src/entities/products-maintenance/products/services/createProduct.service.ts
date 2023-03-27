// Helpers
import {
  productPriceFormater,
  productStockValidator
} from '../../../../helpers';
// Models
import { Product } from '../models';


const createProductService = async (
  uid: string,
  name: string,
  description: string,
  img: string,
  stock: number,
  price: string,
  brand: string,
  category: string,
) => {

  const productData = {
    name,
    description,
    img,
    stock: productStockValidator( stock ),
    price: productPriceFormater( price ),
    brand,
    user: uid,
    category
  }

  try {
    const newProduct = new Product( productData );
    await newProduct.save();

    return {
      newProduct
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-PRODUCT]'.bgRed }: ${ err }` );
  }
}

export default createProductService;
