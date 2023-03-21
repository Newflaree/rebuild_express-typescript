import { Request, Response, Router } from 'express';
// Controllers
import {
  createOurServicesCategory,
  deleteOurServicesCategoryById,
  getOurServicesCategories,
  getOurServicesCategoryById,
  updateOurServicesCategoryById
} from '../controllers';
// Helpers
import {
  ourServicesCategoryNameValidation,
  ourServicesCategoryIdValidation
} from '../../../../helpers';
// Middlewares
import {
  validateAdminRole,
  validateFields,
  validateJWT
} from '../../../../middlewares';

/*
 * PATH: /api/our-services-categories
 */
const router: Router = Router()

router.post( '/', [
], createOurServicesCategory );

router.get( '/', [
], getOurServicesCategories );

router.get( '/:id', [
], getOurServicesCategoryById );

router.put( '/:id', [
], updateOurServicesCategoryById );

router.delete( '/:id', [], deleteOurServicesCategoryById );

export default router;
