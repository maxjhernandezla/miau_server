import * as catsManager from '../dao/managers/cats.manager.js'
import * as userService from '../services/user.service.js'
import * as utils from '../utils/utils.js'
const createCat = async (cat, user) =>
{
    const newCat = {
        ...cat, birth_day: new Date(), owner_id: user._id
    }
    const result = await catsManager.create(cat)

    await userService.findByIdAndUpdate(newCat.owner_id, { $push: { cats: result._id } })

    return result
}

const getCats = async (user) =>
{
    const cats = await catsManager.find({ owner_id: user._id })
    return cats
}

const updateCat = async (cid, cat, user) =>
{
    const catById = await getCatById(cid);
    utils.ownerOwnsCat(catById.owner_id, user._id);
    const updatedCat = await catsManager.findByIdAndUpdate(cid, cat, { new: true });
    return updatedCat
}

const getCatById = async (cid) =>
{
    const cat = await catsManager.findById(cid)
    if (!cat) throw new Error('Cat not found')
    return cat
}

const deleteCat = async (cid, user) =>
{
    const catById = await getCatById(cid);
    utils.ownerOwnsCat(catById.owner_id, user._id);
    const deleted = await catsManager.findByIdAndDelete(cid);
    return deleted
}

export { createCat, getCats, updateCat, getCatById, deleteCat }
