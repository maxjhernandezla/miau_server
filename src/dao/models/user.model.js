import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: "user",
    },
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    working_from: {
        type: String,
        enum: ["home", "office", "hybrid"]
    },
    address: {
        type: String,
    },
    cats: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "cat",
        },
    ]
});
// userSchema.pre('find', function (next)
// {
//     this.populate('cats');
//     next();
// });

// userSchema.pre('findOne', function (next)
// {
//     this.populate('cats');
//     next();
// });


const userModel = mongoose.model(userCollection, userSchema);

export default userModel;