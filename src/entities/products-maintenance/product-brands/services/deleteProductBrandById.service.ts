// Models
import { ProductBrand } from '../models';


const deleteProductBrandByIdService = async ( id: string ) => {
  try {
    await ProductBrand.findByIdAndRemove( id );

    return {
      msg: 'Marca de producto eliminada con éxito'
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.DELETE-PRODUCT-BRAND-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default deleteProductBrandByIdService;
