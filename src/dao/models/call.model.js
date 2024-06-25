import mongoose from "mongoose";

const callsCollection = "calls";

const callSchema = new mongoose.Schema({
    url: {
        type: String,
        require: true,
    },
    order: {
        type: Number,
        enum: [1, 2, 3]
    }
});

const callModel = mongoose.model(callsCollection, callSchema);

export default callModel;