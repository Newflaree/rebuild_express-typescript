import { Router } from 'express';
import { check } from 'express-validator';
// Controllers
import {
  login,
  register,
  renewToken
} from '../controllers';
// Helpers
import { emailValidation } from '../../../helpers';
// Middlewares
import { validateFields, validateJWT } from '../../../middlewares';

/*
 * PATH: /api/auth
 */
const router: Router = Router();

router.post( '/register', [
  check( 'email', 'Email is required' ).isEmail(),
  check( 'name', 'Name is required' ).not().isEmpty(),
  check( 'password', 'Pasword must be longer than 6 charactersa' ).isLength({ min: 6 }),
  check( 'email' ).custom(  emailValidation ),
  validateFields
], register );

router.post( '/login', [
  check( 'email', 'Email is required' ).isEmail(),
  check( 'password', 'Password is required' ).not().isEmpty(),
  validateFields
],login );

router.get( '/renew-token', [
  validateJWT,
  validateFields,
],renewToken );

export default router;
