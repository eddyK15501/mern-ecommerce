import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js"

const PORT = process.env.PORT || 8000;

connectDB();
const app = express();

// Body parser middleware; 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware; Allow access to req.cookies.jwt
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is now running...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Express server now listening on port ${PORT}.`);
});
