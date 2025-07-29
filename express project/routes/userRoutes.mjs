import { Router } from 'express';
const router = Router();
import { protect, restrictTo } from '../middleware/authMiddleware.mjs';
import { getAllUsers, getUserById, updateUser, deactivateUser, createUser } from '../controllers/userController.mjs';

// Admin-only route (example)
router.get('/admin-data', protect, restrictTo('admin'), (req, res) => {
  res.json({ message: 'Welcome Admin' });
});

// Protected user routes
router.get('/', protect, restrictTo('admin'), getAllUsers);
router.get('/:id', protect, getUserById);
router.post('/', protect, restrictTo('admin'), createUser);
router.put('/:id', protect, restrictTo('admin'), updateUser);
router.patch('/:id/deactivate', protect, restrictTo('admin'), deactivateUser);

export default router;

