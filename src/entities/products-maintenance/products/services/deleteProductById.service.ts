// Models
import { Product } from '../models';


const deleteProductByIdService = async ( id: string ) => {
  try {
    await Product.findByIdAndRemove( id );

    return {
      msg: 'El producto fue eliminado con éxito'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-PRODUCT-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default deleteProductByIdService;
