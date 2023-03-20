// Models
import {ObjectId} from 'mongoose';
import { Product } from '../models';


const createProductService = async (
  uid: string,
  name: string,
  description: string,
  img: string,
  stock: number,
  price: number,
  brand: string | ObjectId,
  category: string | ObjectId,
) => {
  const productData = {
    name,
    description,
    img,
    stock,
    price,
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
