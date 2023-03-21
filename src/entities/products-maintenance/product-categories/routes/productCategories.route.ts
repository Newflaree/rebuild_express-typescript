import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import {
  createProductCategory,
  deleteProductCategoryById,
  getProductCategories,
  getProductCategoryById,
  updateProductCategoryById
} from '../controllers';
// Helpers
import {
  productCategoryIdValidation,
  productCategoryNameValidation
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
  check( 'name', 'El nombre de la categoría de productos es obligatorio' ).not().isEmpty(),
  check( 'name' ).custom( name => productCategoryNameValidation( name ) ),
  validateFields
], createProductCategory );

router.get( '/', [
], getProductCategories );

router.get( '/:id', [
  check( 'id', 'El ID no es un ID de Mongo' ).isMongoId(),
  check( 'id' ).custom( id => productCategoryIdValidation( id ) ),
  validateFields
], getProductCategoryById );

router.put( '/:id', [
  validateJWT,
  check( 'name', 'El nombre de la categoría de productos es obligatorio' ).not().isEmpty(),
  check( 'name' ).custom( name => productCategoryNameValidation( name ) ),
  check( 'id', 'El ID no es un ID de Mongo' ).isMongoId(),
  check( 'id' ).custom( id => productCategoryIdValidation( id ) ),
  validateFields
], updateProductCategoryById );

router.delete( '/:id', [
  check( 'id', 'El ID no es un ID de Mongo' ).isMongoId(),
  check( 'id' ).custom( id => productCategoryIdValidation( id ) ),
  validateFields
], deleteProductCategoryById );

export default router;
