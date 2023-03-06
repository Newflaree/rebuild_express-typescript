import { Router } from 'express';
// Controllers
import {
  login,
  register,
  renewToken
} from '../controllers';

const router: Router = Router();

router.post( '/register', register );
router.post( '/login', login );
router.get( '/renew-token', renewToken );

export default router;
