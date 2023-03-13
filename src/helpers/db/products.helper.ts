// Models
import { ProductBrand } from '../../entities/products-maintenance/product-brands/models';

/* =========================================
 * ProductBrands
   =========================================*/
export const productBrandNameValidation = async ( name: string ) => {
  const productBrandNameExists = await ProductBrand.findOne({ name });

  if ( productBrandNameExists ) {
    throw new Error( 'Ya existe una marca de producto con ese nombre' );
  }

  return true;
}

export const productBrandIdValidation = async ( id: string ) => {
  const productBrandIdExists = await ProductBrand.findById( id );

  if ( !productBrandIdExists || !productBrandIdExists?.isActive ) {
    throw new Error( 'No existe ninguna marca de producto con ese ID' );
  }

  return true
}
