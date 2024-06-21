import vaccineModel from "../models/vaccine.model.js";

const create = async (vaccine) =>
{
    const result = await vaccineModel.create(vaccine)
    return result
}

const findByIdAndUpdate = async (vid, vaccine) =>
{
    const result = await vaccineModel.findByIdAndUpdate(vid, vaccine, { new: true })
    return result
}

const findByIdAndDelete = async (vid) =>
{
    const result = await vaccineModel.findByIdAndDelete(vid)
    return result
}

const findById = async (vid) =>
{
    const result = await vaccineModel.findById(vid)
    return result
}

const getAll = async (params) =>
{
    const result = await vaccineModel.find(params)
    return result
}

export { create, findByIdAndUpdate, findByIdAndDelete, findById, getAll }