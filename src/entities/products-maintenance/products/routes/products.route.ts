import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import {
  createProduct,
  deleteProductById,
  getProductById,
  getProducts,
  updateProductById
} from '../controllers';
// Helpers
import {
  productBrandIdValidation,
  productCategoryIdValidation,
  productIdValidation,
  productNameValidation
} from '../../../../helpers';
// Middlewares
import {
  validateAdminRole,
  validateFields,
  validateJWT
} from '../../../../middlewares';

/*
 * PATH: /api/product-categories
 */
const router: Router = Router();

router.post( '/', [
  validateJWT,
  validateAdminRole,
  check( 'name', 'El nombre del producto es requerido' ).not().isEmpty(),
  check( 'name' ).custom( name => productNameValidation( name ) ),
  check( 'description', 'La descripción del producto es requerido' ).not().isEmpty(),
  check( 'img', 'La imágen del producto es requerido' ).not().isEmpty(),
  check( 'stock', 'El stock del producto es requerido' ).not().isEmpty(),
  check( 'price', 'El precio del producto es requerido' ).not().isEmpty(),
  check( 'brand', 'El ID de la marca debe ser válido' ).isMongoId(),
  check( 'brand' ).custom( brand => productBrandIdValidation( brand ) ),
  check( 'category', 'EL ID de la categoría debe ser válido' ).isMongoId(),
  check( 'category' ).custom( category => productCategoryIdValidation( category ) ),
  validateFields
], createProduct );

router.get( '/', [
], getProducts );

router.get( '/:id', [
  check( 'id', 'El ID no es un ID de Mongo' ).isMongoId(),
  check( 'id' ).custom( id => productIdValidation( id ) ),
  validateFields
], getProductById );

router.put( '/:id', [
  validateJWT,
  validateAdminRole,
  check( 'id', 'El ID no es un ID de Mongo' ).isMongoId(),
  check( 'id' ).custom( id => productIdValidation( id ) ),
  check( 'name', 'El nombre del producto es requerido' ).not().isEmpty(),
  check( 'name' ).custom( name => productNameValidation( name ) ),
  check( 'description', 'La descripción del producto es requerido' ).not().isEmpty(),
  check( 'img', 'La imágen del producto es requerido' ).not().isEmpty(),
  check( 'stock', 'El stock del producto es requerido' ).not().isEmpty(),
  check( 'price', 'El precio del producto es requerido' ).not().isEmpty(),
  check( 'brand', 'El ID de la marca debe ser válido' ).isMongoId(),
  check( 'brand' ).custom( brand => productBrandIdValidation( brand ) ),
  check( 'category', 'EL ID de la categoría debe ser válido' ).isMongoId(),
  check( 'category' ).custom( category => productCategoryIdValidation( category ) ),
  validateFields
], updateProductById );

router.delete( '/:id', [
  validateJWT,
  validateAdminRole,
  check( 'id', 'El ID no es un ID de Mongo' ).isMongoId(),
  check( 'id' ).custom( id => productIdValidation( id ) ),
  validateFields
], deleteProductById );

export default router;
