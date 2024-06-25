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
    vaccinations: [
        {
            vaccine_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "vaccines",
                required: true
            },
            date: {
                type: Date,
                required: true
            },
            vet_name: {
                type: String,
                required: true
            },
            next_due_date: {
                type: Date
            }
        }
    ]
});

catSchema.pre('find', function (next)
{
    this.populate(['vaccinations', 'vaccinations.vaccine_id']);
    next();
});

catSchema.pre('findOne', function (next)
{
    this.populate(['vaccinations', 'vaccinations.vaccine_id']);
    next();
});

catSchema.pre('findById', function (next)
{
    this.populate('vaccinations');
    next();
});

const catModel = mongoose.model(catCollection, catSchema);

export default catModel;