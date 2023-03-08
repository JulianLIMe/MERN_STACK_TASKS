import mongoose from "mongoose";

const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: { type: String, require: true },
    description: { type: String, require: true }
});

export default mongoose.model('Task', TaskSchema);