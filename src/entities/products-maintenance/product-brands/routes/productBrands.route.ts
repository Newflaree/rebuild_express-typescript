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
// Middlewares

/*
 * PATH: /api/product-brands
 */
const router: Router = Router();

router.post( '/', createProductBrand );
router.get( '/', getProductBrands );
router.get( '/:id', getProductBrandById );
router.put( '/:id', updateProductBrandById );
router.delete( '/:id', deleteProductBrandById );

export default router;
