import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import cors from "cors";
import userRoutes from './routes/user-routes';


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple route
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome to the Node.js + TypeScript API!" });
});

app.use("/users", userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
