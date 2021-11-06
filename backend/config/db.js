import mongoose from "mongoose";

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser : true });
        console.log(`connected to ${conn.connection.host}`)
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
  }

  export default connectDB;