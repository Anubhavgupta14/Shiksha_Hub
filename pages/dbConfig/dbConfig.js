import mongoose from 'mongoose';

const dbConnect = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  const conn = await mongoose.connect('mongodb+srv://anubhavgu2002:ETpINf0Q6pXkaNJ3@cluster0.mwbmnnf.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'mernauth',
  });
  console.log(`Mongo Connected: ${conn.connection.host}`);

  return handler(req, res);
};

export default dbConnect;