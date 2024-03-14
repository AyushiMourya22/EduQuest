import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';

const errorHandler = require('./middleware/error.js');

const app = express();

require('dotenv').config();
require('./connection');

app.use(express.json());
app.use(cors());

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.use(errorHandler);



app.listen(5000,()=>{
  console.log("Listening at port 5000")
})