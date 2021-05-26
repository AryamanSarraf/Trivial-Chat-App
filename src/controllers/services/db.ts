import mongoose from "mongoose";

const mongo_uri =
  process.env.MONGO_URI || "mongodb://localhost:27017/trivial-chat";

export const connectDB = async () => {
  try {
    await mongoose.connect(mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`database is connected on ${mongo_uri}`);
  } catch (err) {
    console.log(err);
  }
};
