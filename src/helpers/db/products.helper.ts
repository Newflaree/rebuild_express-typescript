// Models
import { ProductBrand } from '../../entities/products-maintenance/product-brands/models';

/* =========================================
 * ProductBrands
   =========================================*/
export const productBrandNameValidation = async ( name: string ) => {
  const productBrandNameExists = await ProductBrand.findOne({ name });

  if ( productBrandNameExists ) {
    throw new Error( 'There is already a product brand with that name' );
  }

  return true;
}

export const productBrandIdValidation = async ( id: string ) => {
  const productBrandIdExists = await ProductBrand.findById( id );

  if ( !productBrandIdExists ) {
    throw new Error( 'There is no exists a product brand with that id' );
  }

  return true
}
