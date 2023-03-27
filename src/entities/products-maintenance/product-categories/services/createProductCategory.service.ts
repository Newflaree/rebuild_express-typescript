// Models
import { ProductCategory } from '../models';

const createProductCategoryService = async (
  name: string,
  uid: string
) => {

  const productCategoryData = {
    name: name.toUpperCase(),
    user: uid
  }

  try {
    const newProductCategory = new ProductCategory( productCategoryData );
    await newProductCategory.save();

    return {
      newProductCategory
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-PRODUCT-CATEGORY]'.bgRed }: ${ err }` );
  }
}

export default createProductCategoryService;
