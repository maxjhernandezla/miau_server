import userModel from "../models/user.model.js";

const create = async (user) =>
{
    const result = await userModel.create(user);
    return result
}

const findByEmail = async (email) =>
{
    const result = await userModel.findOne({ email: email });
    return result
}

const findById = async (id) =>
{
    const result = await userModel.findOne({ _id: id });
    return result
}

const findByIdAndUpdate = async (id, params) =>
{
    const result = await userModel.findByIdAndUpdate(id, params, { new: true });
    return result;
}

export
{
    create,
    findByEmail,
    findById,
    findByIdAndUpdate
}