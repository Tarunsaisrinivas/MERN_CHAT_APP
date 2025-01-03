import express from 'express';
import authRoute from './routes/auth.router.js';
import dotenv from 'dotenv';
import connectDB from './lib/db.js';
import cookieParser from 'cookie-parser';
import messageRoute from './routes/message.router.js';
import cors from 'cors';
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use('/api/auth',authRoute);
app.use('/api/message',messageRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});