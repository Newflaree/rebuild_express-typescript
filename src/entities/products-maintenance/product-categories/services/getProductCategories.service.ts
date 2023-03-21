// Models
import { ProductCategory } from '../models';

const getProductCategoriesService = async (
  condition: object,
  from: number,
  limit: number
) => {
  try {
    const [ totalProductCategories, productCategories ] = await Promise.all([
      ProductCategory.countDocuments( condition ),
      ProductCategory.find( condition )
        .populate( 'user', 'name' )
        .skip( Number( from ) )
        .limit( Number( limit ) )
    ]);

    return {
      totalProductCategories,
      productCategories
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-PRODUCT-CATEGORIES]'.bgRed }: ${ err }` );
  }
}

export default getProductCategoriesService;
