import  mongoose  from 'mongoose';

const connectDB = async () => {
  try {
    console.log("Connecting to:", process.env.MONGO_URI); // 👈 Debug
    console.log("ENV VARS LOADED:", process.env);

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected to:', conn.connection.db.databaseName);
  } catch (err) {
    console.error("MongoDB Connection error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
