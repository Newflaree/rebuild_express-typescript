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
import { productBrandNameValidation } from '../../../../helpers';
// Middlewares
import { validateFields, validateJWT } from '../../../../middlewares';

/*
 * PATH: /api/product-brands
 */
const router: Router = Router();

router.post( '/', [
  validateJWT,
  check( 'name', 'Product brand name is required' ).not().isEmpty(),
  check( 'name' ).custom( productBrandNameValidation ),
  validateFields
], createProductBrand );

router.get( '/', getProductBrands );
router.get( '/:id', getProductBrandById );
router.put( '/:id', updateProductBrandById );
router.delete( '/:id', deleteProductBrandById );

export default router;
