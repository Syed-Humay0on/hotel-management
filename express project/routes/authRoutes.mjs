import { Router } from 'express';
const router = Router();
import { registerUser, loginUser, logoutUser } from '../controllers/authController.mjs';
import { validate } from '../middleware/validateRequest.mjs';
import { registerSchema, loginSchema } from '../validators/authValidator.mjs';

router.post('/register', validate(registerSchema), registerUser);
router.post('/login', validate(loginSchema), loginUser);
router.post('/logout', logoutUser);

export default router;
