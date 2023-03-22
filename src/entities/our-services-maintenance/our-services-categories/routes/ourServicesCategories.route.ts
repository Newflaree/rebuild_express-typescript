import { Router } from 'express';
import { check } from 'express-validator';
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
  validateJWT,
  validateAdminRole,
  check( 'name', 'El nombre de la categoría del servicio es necesario' ).not().isEmpty(),
  check( 'name' ).custom( name => ourServicesCategoryNameValidation( name ) ),
  validateFields
], createOurServicesCategory );

router.get( '/', [
], getOurServicesCategories );

router.get( '/:id', [
], getOurServicesCategoryById );

router.put( '/:id', [
], updateOurServicesCategoryById );

router.delete( '/:id', [], deleteOurServicesCategoryById );

export default router;
