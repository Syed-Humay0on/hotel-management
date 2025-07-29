import { Router } from 'express';
const router = Router();
import { registerUser, loginUser, logoutUser } from '../controllers/authController.mjs';

router.post('/register', registerUser);  // Only admin can access this route after auth setup
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;
