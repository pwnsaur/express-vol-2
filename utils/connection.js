import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to db`);
  } catch (err) {
    console.log(err);
  }
};

export default connectionToMongo;
