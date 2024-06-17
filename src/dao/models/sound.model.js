import mongoose from "mongoose";

const soundsCollection = "sounds";

const soundSchema = new mongoose.Schema({
    url: {
        type: String,
        require: true,
    },
    order: {
        type: Number,
        enum: [1, 2, 3]
    }
});

const soundModel = mongoose.model(soundsCollection, soundSchema);

export default soundModel;