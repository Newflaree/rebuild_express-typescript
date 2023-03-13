// Models
import { ProductBrand } from '../models';


const deleteProductBrandByIdService = async ( id: string ) => {
  try {
    await ProductBrand.findByIdAndRemove( id );

    return {
      msg: 'Product Brand successfully removed'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-PRODUCT-BRAND-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default deleteProductBrandByIdService;
