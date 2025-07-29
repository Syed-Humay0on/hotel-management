import express from 'express';
import { submitFeedback, getAllFeedbacks } from '../controllers/feedbackController.mjs';
import { protect, restrictTo } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/', protect, restrictTo('guest'), submitFeedback);
router.get('/', protect, restrictTo('admin', 'manager'), getAllFeedbacks);

export default router;
