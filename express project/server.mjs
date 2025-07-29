import express, { json } from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.mjs';
import userRoutes from './routes/userRoutes.mjs';
import guestRoutes from './routes/guestRoutes.mjs';
import housekeepingRoutes from './routes/housekeepingRoutes.mjs';
import maintenanceRoutes from './routes/maintenanceRoutes.mjs';
import reportRoutes from './routes/reportRoutes.mjs';
import feedbackRoutes from './routes/feedbackRoutes.mjs';
import serviceRoutes from './routes/serviceRoutes.mjs';
import settingsRoutes from './routes/settingsRoutes.mjs';
import notificationRoutes from './routes/notificationRoutes.mjs';



config();
connectDB();

const app = express();
app.use(cookieParser());
app.use(json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/guests', guestRoutes);
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/housekeeping', housekeepingRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/notifications', notificationRoutes);


// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
