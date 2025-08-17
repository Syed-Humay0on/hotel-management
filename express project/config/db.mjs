import { connect } from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGO_URI);
    console.log('MongoDB connected to:', conn.connection.db.databaseName);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
