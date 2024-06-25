import callModel from "../models/call.model.js";

const create = async (call) =>
{
    const result = await callModel.create(call);
    return result;
}

const findByIdAndUpdate = async (cid, call) =>
{
    const result = await callModel.findByIdAndUpdate(cid, call, { new: true }).lean();
    return result;
}

const findByIdAndDelete = async (cid) =>
{
    const result = await callModel.findByIdAndDelete(scidid);
    return result;
}

const getCalls = async () =>
{
    const result = await callModel.find().exec();
    return result
}

const findById = async (cid) =>
{
    const result = await callModel.findById(cid).exec();
    return result;
}

export { create, findByIdAndUpdate, findByIdAndDelete, getCalls, findById }