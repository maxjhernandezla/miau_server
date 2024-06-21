import mongoose from "mongoose";

const vaccineCollection = "vaccines";

const vaccineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    first_dose: {
        type: Number,
    },
    first_dose_description: {
        type: String,
        required: true
    },
    boosters: {
        type: Number,
    },
    boosters_description: {
        type: String,
        required: true
    }
});

const vaccineModel = mongoose.model(vaccineCollection, vaccineSchema);

export default vaccineModel;