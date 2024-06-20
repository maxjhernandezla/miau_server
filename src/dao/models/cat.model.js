import mongoose from "mongoose";

const catCollection = "cat";

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    birthday: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    neutered: {
        type: String,
        enum: ['yes', 'no'],
        required: true
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
});

const catModel = mongoose.model(catCollection, catSchema);

export default catModel;