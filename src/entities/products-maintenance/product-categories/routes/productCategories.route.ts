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
// Middlewares
import { validateFields, validateJWT } from '../../../../middlewares';

/*
 * PATH: /api/product-categories
 */
const router: Router = Router();

router.post( '/', [
], createProductCategory );

router.get( '/', [
], getProductCategories );

router.get( '/:id', [
], getProductCategoryById );

router.put( '/:id', [
], updateProductCategoryById );

router.delete( '/:id', [
], deleteProductCategoryById );

export default router;
