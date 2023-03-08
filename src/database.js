import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://juliancho:Lolapug46@cluster0.8q1gc0a.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI)
    .then(db => console.log("Database is connected"))
    .catch(err => console.log(err.message));

export default mongoose;
