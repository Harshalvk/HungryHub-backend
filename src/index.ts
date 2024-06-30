import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connectDB";
import userRouter from "./routes/user.route";
import restaurantRouter from "./routes/myRestaurant.route";
import { v2 as cloudinary } from "cloudinary";

//Database connection
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDIARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

//global middlewares
app.use(express.json());
app.use(cors());

//health check for render deployment
app.get("/health", async (_, res: Response) => {
  res.send({ msg: "health OK!" });
});

//routes
app.use("/api/my/user", userRouter);
app.use("/api/my/restaurant", restaurantRouter);

app.listen(8080, () => {
  console.log("🚀 Server is listening on port 8080");
});
