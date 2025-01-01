import express from 'express';
import authRoute from './routes/auth.router.js';
import dotenv from 'dotenv';
import connectDB from './lib/db.js';
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use('/api/routes',authRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});