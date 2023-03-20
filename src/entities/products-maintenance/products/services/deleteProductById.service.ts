// Models
import { Product } from '../models';


const deleteProductByIdService = async () => {
  try {

    return {
      msg: 'deleteProductByIdService'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-PRODUCT-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default deleteProductByIdService;
