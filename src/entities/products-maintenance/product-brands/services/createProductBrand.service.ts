// Models
import { ProductBrand } from '../models';


const createProductBrandService = async ( name: string, uid: string ) => {
  const productBrandData = {
    name: name.toUpperCase(),
    user: uid
  }

  try {
    const newProductBrand = new ProductBrand( productBrandData );
    await newProductBrand.save();

    return {
      newProductBrand
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.CREATE-PRODUCT-BRAND]'.bgRed }: ${ err }` );
  }
}

export default createProductBrandService;
