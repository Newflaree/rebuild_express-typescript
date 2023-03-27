// Models
import { Product } from '../models';


const getProductsService = async (
  condition: object,
  from: number,
  limit: number
) => {

  try {
    const [ totalProducts, products ] = await Promise.all([
      Product.countDocuments( condition ),
      Product.find( condition )
        .populate( 'user', 'name' )
        .populate( 'brand', 'name' )
        .populate( 'category', 'name' )
        .skip( Number( from ) )
        .limit( Number( limit ) )
    ]);

    return {
      totalProducts,
      products
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-PRODUCTS]'.bgRed }: ${ err }` );
  }
}

export default getProductsService;
