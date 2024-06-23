import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connectDB";
import userRouter from "./routes/user.route";
import { v2 as cloudinary } from "cloudinary";

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDIARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ msg: "health OK!" });
});

app.use("/api/my/user", userRouter);

app.listen(8080, () => {
  console.log("🚀 Server is listening on port 8080");
});
