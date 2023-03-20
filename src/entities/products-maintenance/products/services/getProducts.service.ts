// Models
import { Product } from '../models';


const getProductsService = async () => {
  try {

    return {
      msg: 'createProductService'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-PRODUCTS]'.bgRed }: ${ err }` );
  }
}

export default getProductsService;
