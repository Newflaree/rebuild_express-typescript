// Models
import { Product } from '../models';


const getProductByIdService = async () => {
  try {

    return {
      msg: 'getProductByIdService'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-PRODUCT-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default getProductByIdService;
