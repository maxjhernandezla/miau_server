import * as catsManager from '../dao/managers/cats.manager.js'
import * as userService from '../services/users.service.js'
import * as utils from '../utils/utils.js'
import { format } from 'date-fns'

const createCat = async (cat, user) =>
{
    const formattedBirthday = format(new Date(cat.birthday), 'yyyy-MM-dd');
    const newCat = {
        ...cat, birthday: formattedBirthday, owner_id: user._id
    }
    const result = await catsManager.create(newCat);

    await userService.findByIdAndUpdate(newCat.owner_id, { $push: { cats: result._id } })

    return result
}

const getCats = async (user) =>
{
    const cats = await catsManager.find({ owner_id: user._id })
    return cats
}

const getCatById = async (cid, user) =>
{
    const catById = await catsManager.findById(cid)
    if (!catById) throw new Error('Cat not found')
    utils.ownerOwnsCat(catById.owner_id, user._id)
    return catById
}

const updateCat = async (cid, cat, user) =>
{
    const response = await getCatById(cid, user);
    const updatedCat = await catsManager.findByIdAndUpdate(cid, cat, { new: true });
    return updatedCat
}

const deleteCat = async (cid, user) =>
{
    const catById = await getCatById(cid, user);
    const deleted = await catsManager.findByIdAndDelete(cid);
    return deleted
}

export { createCat, getCats, updateCat, getCatById, deleteCat }
