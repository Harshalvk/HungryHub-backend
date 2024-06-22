import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URI as string)
      .then(() => console.log("🚀 DB connected successfully!"));
  } catch (error) {
    console.log("🚨 Error connecting DB:\n", error);
    process.exit(1);
  }
};

export default connectDB;
