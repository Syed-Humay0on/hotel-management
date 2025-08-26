import { Router } from 'express';
const router = Router();
import { registerUser, loginUser, logoutUser, getMe } from '../controllers/authController.mjs';
import { validate } from '../middleware/validateRequest.mjs';
import { registerSchema, loginSchema } from '../validators/authValidator.mjs';
import { protect } from "../middleware/authMiddleware.mjs";

router.post('/register', validate(registerSchema), registerUser);
router.post('/login', validate(loginSchema), loginUser);
router.post('/logout', logoutUser);
// ✅ Protect this route
router.get('/me', protect, getMe);

export default router;
