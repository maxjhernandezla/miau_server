import catModel from "../models/cat.model.js";

const create = async (cat) =>
{
    const result = await catModel.create(cat);
    return result.toJSON(); // Transforma el resultado a JSON
};

const find = async (params) =>
{

    const result = await catModel.find(params).lean();
    return result.map(cat => ({
        ...cat,
        _id: cat._id.toString(),
        owner_id: cat.owner_id.toString()
    }));
};

const findById = async (cid) =>
{
    const result = await catModel.findById(cid).lean();
    if (!result) throw new Error('Cat not found')
    return { ...result, _id: result._id.toString(), owner_id: result.owner_id.toString() };
};

const findByIdAndDelete = async (cid) =>
{
    const result = await catModel.findByIdAndDelete(cid);
    return result.toJSON()
}

const findByIdAndUpdate = async (cid, cat) =>
{
    const result = await catModel.findByIdAndUpdate(cid, cat, { new: true }).lean();
    return { ...result, _id: result._id.toString(), owner_id: result.owner_id.toString() };
};
export { create, find, findById, findByIdAndUpdate, findByIdAndDelete }