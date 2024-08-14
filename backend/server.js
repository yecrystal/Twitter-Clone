import express from 'express';
import dotenv from 'dotenv';

import connectMongoDB from './db/connectMongoDB.js'; 
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); // to parse req.body
app.use(express.urlencoded({ extended: true })); // to parse form data

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
    connectMongoDB();
});