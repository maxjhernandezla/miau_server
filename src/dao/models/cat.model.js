import mongoose from "mongoose";

const catCollection = "cat";

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    birth_day: {
        type: Date,
        require: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female'], // Solo permite 'male' o 'female'
        require: true
    },
    neutered: {
        type: String,
        enum: ['yes', 'no'],
        require: true
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users", // Nombre de la colección de usuarios
    },
});

const catModel = mongoose.model(catCollection, catSchema);

export default catModel;