// Models
import { ProductBrand } from '../models';

const getProductBrandsService = async (
  condition: object,
  from: number,
  limit: number
) => {
  try {
    const [ totalProductBrands, productBrands ] = await Promise.all([
      ProductBrand.countDocuments( condition ),
      ProductBrand.find( condition )
        .populate( 'user', 'name' )
        .skip( Number( from ) )
        .limit( Number( limit ) )
    ]);

    return {
      totalProductBrands,
      productBrands
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-PRODUCT-BRANDS]'.bgRed }: ${ err }` );
  }
}

export default getProductBrandsService;
