import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import {
  createProductBrand,
  deleteProductBrandById,
  getProductBrandById,
  getProductBrands,
  updateProductBrandById
} from '../controllers';
// Helpers
import {
  productBrandIdValidation,
  productBrandNameValidation
} from '../../../../helpers';
// Middlewares
import {
  validateFields,
  validateJWT
} from '../../../../middlewares';

/*
 * PATH: /api/product-brands
 */
const router: Router = Router();

router.post( '/', [
  validateJWT,
  check( 'name', 'El nombre de la marca de productos es obligatorio' ).not().isEmpty(),
  check( 'name' ).custom( name => productBrandNameValidation( name ) ),
  validateFields
], createProductBrand );

router.get( '/', [
], getProductBrands );

router.get( '/:id', [

  check( 'id', 'El ID no es un ID de Mongo' ).isMongoId(),
  check( 'id' ).custom( id => productBrandIdValidation( id ) ),
  validateFields
], getProductBrandById );

router.put( '/:id', [
  validateJWT,
  check( 'name', 'El nombre de la marca de productos es obligatorio' ).not().isEmpty(),
  check( 'name' ).custom( name => productBrandNameValidation( name ) ),
  check( 'id', 'El ID no es un ID de Mongo' ).isMongoId(),
  check( 'id' ).custom( id => productBrandIdValidation( id ) ),
  validateFields
], updateProductBrandById );

router.delete( '/:id', [
  validateJWT,
  check( 'id', 'El ID no es un ID de Mongo' ).isMongoId(),
  check( 'id' ).custom( id => productBrandIdValidation( id ) ),
  validateFields
], deleteProductBrandById );

export default router;
