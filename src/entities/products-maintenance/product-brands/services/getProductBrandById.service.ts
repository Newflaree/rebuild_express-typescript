// Models
import { ProductBrand } from '../models';


const getProductBrandByIdService = async ( id: string ) => {
  try {
    const productBrand = await ProductBrand.findById( id );

    return {
      productBrand
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.GET-PRODUCT-BRAND-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default getProductBrandByIdService;
