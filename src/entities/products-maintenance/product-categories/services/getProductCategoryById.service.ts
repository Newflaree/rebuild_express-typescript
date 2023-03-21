// Models
import { ProductCategory } from '../models';


const getProductCategoryByIdService = async ( id: string ) => {
  try {
    const productCategory = await ProductCategory.findById( id )
      .populate( 'user', 'name' );

    return {
      productCategory
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-PRODUCT-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default getProductCategoryByIdService;
