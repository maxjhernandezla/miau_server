import soundModel from "../models/sounds.model.js";

const create = async (sound) =>
{
    const result = await soundModel.create(sound);
    return result;
}

const findByIdAndUpdate = async (sid, sound) =>
{
    const result = await soundModel.findByIdAndUpdate(sid, sound, { new: true }).lean();
    return result;
}

const findByIdAndDelete = async (sid) =>
{
    const result = await soundModel.findByIdAndDelete(sid);
    return result;
}

const getSounds = async () =>
{
    const result = await soundModel.find().exec();
    return result
}

const findById = async (sid) =>
{
    const result = await soundModel.findById(sid).exec();
    return result;
}

export { create, findByIdAndUpdate, findByIdAndDelete, getSounds, findById }