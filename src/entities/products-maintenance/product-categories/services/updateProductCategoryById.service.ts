// Models
import { ProductCategory } from '../models';


const updateProductCategoryByIdService = async (
  uid: string,
  id: string,
  name: string
) => {

  const updateProductCategoryData = {
    name: name.toUpperCase(),
    user: uid
  }

  try {
    const updatedProductCategory = await ProductCategory.findByIdAndUpdate( id, updateProductCategoryData, { new: true } )
      .populate( 'user', 'name' );

    return {
      updatedProductCategory
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-PRODUCT-CATEGORY-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default updateProductCategoryByIdService;
