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
