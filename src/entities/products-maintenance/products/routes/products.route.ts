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
  productNameValidation
} from '../../../../helpers';
// Middlewares
import {
  validateFields,
  validateJWT
} from '../../../../middlewares';

/*
 * PATH: /api/product-categories
 */
const router: Router = Router();

router.post( '/', [
  validateJWT,
  check( 'name', 'El nombre del producto es requerido' ).not().isEmpty(),
  check( 'name' ).custom( n => productNameValidation( n ) ),
  check( 'description', 'La descripción del producto es requerido' ).not().isEmpty(),
  check( 'img', 'La imágen del producto es requerido' ).not().isEmpty(),
  check( 'stock', 'El stock del producto es requerido' ).not().isEmpty(),
  check( 'price', 'El precio del producto es requerido' ).not().isEmpty(),
  check( 'brand', 'El ID de la marca debe ser válido' ).isMongoId(),
  check( 'brand' ).custom( b => productBrandIdValidation( b ) ),
  check( 'category', 'EL ID de la categoría debe ser válido' ).isMongoId(),
  check( 'category' ).custom( c => productCategoryIdValidation( c ) ),
  validateFields
], createProduct );

router.get( '/', [
], getProducts );

router.get( '/:id', [
], getProductById );

router.put( '/:id', [
], updateProductById );

router.delete( '/:id', [
], deleteProductById );

export default router;
