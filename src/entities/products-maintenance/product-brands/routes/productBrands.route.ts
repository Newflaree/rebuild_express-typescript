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
import { productBrandIdValidation, productBrandNameValidation } from '../../../../helpers';
// Middlewares
import { validateFields, validateJWT } from '../../../../middlewares';

/*
 * PATH: /api/product-brands
 */
const router: Router = Router();

router.post( '/', [
  validateJWT,
  check( 'name', 'El nombre de la marca de productos es obligatorio' ).not().isEmpty(),
  check( 'name' ).custom( productBrandNameValidation ),
  validateFields
], createProductBrand );

router.get( '/', [
], getProductBrands );

router.get( '/:id', [
  check( 'id' ).custom( productBrandIdValidation ),
  validateFields
], getProductBrandById );

router.put( '/:id', [
  validateJWT,
  check( 'name', 'El nombre de la marca de productos es obligatorio' ).not().isEmpty(),
  check( 'name' ).custom( productBrandNameValidation ),
  check( 'id' ).custom( productBrandIdValidation ),
  validateFields
], updateProductBrandById );

router.delete( '/:id', [
  validateJWT,
  check( 'id' ).custom( productBrandIdValidation ),
  validateFields
], deleteProductBrandById );

export default router;
