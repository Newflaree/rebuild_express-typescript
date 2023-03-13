// Models
import { ProductBrand } from '../models';

const updateProductBrandByIdService = async (
  uid: string,
  id: string,
  name: string
) => {

  const updateData = {
    name: name.toUpperCase(),
    user: uid
  }

  try {
    const productBrandUpdated = await ProductBrand.findByIdAndUpdate( id, updateData, { new: true } )
      .populate( 'user', 'name' );

    return {
      productBrandUpdated
    }

  } catch ( err ) {
    console.log( `${ '[SERVICE.UPDATE-PRODUCT-BRAND-BY-ID]'.bgRed }: ${ err }` );
  }
}

export default updateProductBrandByIdService;
