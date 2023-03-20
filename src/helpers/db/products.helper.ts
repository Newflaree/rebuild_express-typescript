// Models
import {ObjectId} from "mongoose";
import {
  Product,
  ProductBrand,
  ProductCategory
} from "../../entities/products-maintenance";

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
/* =========================================
 * Products
   =========================================*/
export const productNameValidation = async ( name: string ) => {
  const productNameExists = await Product.findOne({ name });

  if ( productNameExists ) {
    throw new Error( 'Ya existe un producto con ese nombre' );
  }

  return true;
}

export const productIdValidation = async ( id: string ) => {
  const productIdExists = await Product.findById( id );

  if ( !productIdExists || !productIdExists?.isActive ) {
    throw new Error( 'No existe ningún producto con ese ID' );
  }

  return true
}

export const productPriceFormater = ( price: string ) => {
  if ( price.length <= 0 || price.length < 4 ) {
    return price;
  }

  const formatedPrice = new Intl.NumberFormat('es-ES').format( Number( price || '' ) );

  return String( formatedPrice );
}

export const productStockValidator = ( stock = 0 ) => {
  if ( stock <= 0 ) return 0;

  return stock;
}
