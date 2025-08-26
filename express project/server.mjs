import express, { json } from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.mjs';
import cors from 'cors';
// import errorHandler from './middleware/errorMiddleware.mjs'

import userRoutes from './routes/userRoutes.mjs';
// import guestRoutes from './routes/guestRoutes.mjs';
import bookingsRoutes from "./routes/Booking.mjs";
import housekeepingRoutes from './routes/housekeepingRoutes.mjs';
import maintenanceRoutes from './routes/maintenanceRoutes.mjs';
import reportRoutes from './routes/reportRoutes.mjs';
import feedbackRoutes from './routes/feedbackRoutes.mjs';
import serviceRoutes from './routes/serviceRoutes.mjs';
import settingsRoutes from './routes/settingsRoutes.mjs';
import notificationRoutes from './routes/notificationRoutes.mjs';
import authRoutes from './routes/authRoutes.mjs';

config({ path: './.env' });   // 👈 force it to use THIS file
connectDB();

const app = express();
app.use(cookieParser());
app.use(express.json());   // ✅ this fixes empty req.body for all routes
app.use(cors({
  origin: "http://localhost:5173", // your React dev server
  credentials: true,
}));

// Routes
app.use('/api/users', userRoutes);
// app.use('/api/guests', guestRoutes);
app.use('/api/auth', authRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use('/api/housekeeping', housekeepingRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/feedbacks', feedbackRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/notifications', notificationRoutes);


// Error handling
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
