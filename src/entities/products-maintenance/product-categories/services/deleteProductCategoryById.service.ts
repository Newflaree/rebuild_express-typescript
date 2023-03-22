// Models
import { ProductCategory } from '../models';

const deleteProductCategoryByIdService = async ( id: string ) => {
  try {
    await ProductCategory.findByIdAndDelete( id );

    return {
      msg: 'La categoría de producto fue eliminada con éxito'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-PRODUCT-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default deleteProductCategoryByIdService;
