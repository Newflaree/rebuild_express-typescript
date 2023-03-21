import { Request, Response, Router } from 'express';
// Controllers
// Helpers
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

router.post( '/' );

router.get( '/', );

router.get( '/:id' );

router.put( '/:id' );

router.delete( '/:id' );

export default router;
