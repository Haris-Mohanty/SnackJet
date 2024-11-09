import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Already connected to MongoDB.");
    return;
  }

  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000, //30 sec
      socketTimeoutMS: 30000,
    });

    isConnected = mongoose.connection.readyState === 1;
    console.log(
      `Connected to MongoDB Database at ${connection.connection.host}.`
        .bgBrightGreen.black
    );
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`.bgBrightRed.white);
    process.exit(1);
  }
};

export default connectDB;
