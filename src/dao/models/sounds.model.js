import mongoose from "mongoose";

const soundsCollection = "sounds";

const soundSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,

    },
    order: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const soundModel = mongoose.model(soundsCollection, soundSchema);

export default soundModel;