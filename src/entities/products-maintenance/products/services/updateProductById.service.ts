// Models
import { Product } from '../models';


const updateProductByIdService = async () => {
  try {

    return {
      msg: 'updateProductByIdService'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-PRODUCT-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default updateProductByIdService;
