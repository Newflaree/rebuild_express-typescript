// Models
import { Product } from '../models';


const createProductService = async () => {
  try {

    return {
      msg: 'createProductService'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-PRODUCT]'.bgRed }: ${ err }` );
  }
}

export default createProductService;
