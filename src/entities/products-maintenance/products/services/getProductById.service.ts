// Models
import { Product } from '../models';


const getProductByIdService = async (
  id: string
) => {

  try {
    const currentProduct = await Product.findById( id )
      .populate( 'user', 'name' )
      .populate( 'brand', 'name' )
      .populate( 'category', 'name' )

    return {
      currentProduct
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-PRODUCT-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default getProductByIdService;
