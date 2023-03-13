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
  check( 'email', 'El correo electrónico es obligatorio' ).isEmail(),
  check( 'name', 'El nombre de usuario el obligatorio' ).not().isEmpty(),
  check( 'password', 'La contraseña debe tener al menos 6 carateres' ).isLength({ min: 6 }),
  check( 'email' ).custom(  emailValidation ),
  validateFields
], register );

router.post( '/login', [
  check( 'email', 'El correo electrónico es obligatorio' ).isEmail(),
  check( 'password', 'La contraseña es obligatoria' ).not().isEmpty(),
  validateFields
],login );

router.get( '/renew-token', [
  validateJWT,
  validateFields,
],renewToken );

export default router;
