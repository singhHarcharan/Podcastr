import express, { Request, Response } from "express";
import dotenv from "dotenv";
import connectDB from "./db";
import cors from "cors";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Enable CORS here — BEFORE routes and middlewares
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use("/api", authRoutes);

app.get("/", (_req, res) => res.send("API Running"));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
