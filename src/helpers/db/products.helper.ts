// Models
import { ProductBrand } from '../../entities/products-maintenance/product-brands/models';
import { ProductCategory } from '../../entities/products-maintenance/product-categories/models';

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

/* =========================================
 * ProductCategories
   =========================================*/
export const productCategoryNameValidation = async ( name: string ) => {
  const productCategoryNameExists = await ProductCategory.findOne({ name });

  if ( productCategoryNameExists ) {
    throw new Error( 'Ya existe una categoría de producto con ese nombre' );
  }

  return true;
}

export const productCategoryIdValidation = async ( id: string ) => {
  const productCategoryIdExists = await ProductCategory.findById( id );

  if ( !productCategoryIdExists || !productCategoryIdExists?.isActive ) {
    throw new Error( 'No existe ninguna categoría de producto con ese ID' );
  }

  return true
}
