import express from 'express';
import {
  updateSetting,
  getAllSettings,
  getSettingByKey
} from '../controllers/settingsController.mjs';
import { protect, restrictTo } from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.use(protect, restrictTo('admin'));

router.put('/', updateSetting);
router.get('/', getAllSettings);
router.get('/:key', getSettingByKey);

export default router;
