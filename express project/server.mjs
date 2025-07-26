import express, { json } from 'express';
import { config } from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import guestRoutes from './routes/guestRoutes';
import { errorHandler } from './middleware/errorMiddleware';
const cookieParser = require('cookie-parser');

config();
connectDB();

const app = express();
app.use(cookieParser());
app.use(json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/guests', guestRoutes);
app.use('/api/auth', require('./routes/authRoutes'));

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
