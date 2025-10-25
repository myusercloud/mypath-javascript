import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import photoRoutes from "./routes/photoRoutes.js";

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(path.resolve(), '/uploads')));

//routes
app.use('/api/photos', photoRoutes);

//connect to mongodb and start server
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server running on port ${process.env.PORT || 5000}`);
        });
    })