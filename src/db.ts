import mongoose from "mongoose";

const options: mongoose.ConnectOptions = {
  readPreference: "primaryPreferred",
  ssl: true,
  connectTimeoutMS: 200000,
  socketTimeoutMS: 200000,
};

const MONGODB_URI =
  process.env.MONGODB_URL || "mongodb://localhost/magicFlex-db";

export const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI, options);
    console.log("Db is connected");
  } catch (error) {
    console.error(error);
  }
};
