import catModel from "../models/cat.model.js";
import userModel from "../models/user.model.js";

const create = async (cat) =>
{
    const result = await catModel.create(cat)
    return result;
}

export { create }