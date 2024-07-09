import * as catsManager from '../dao/managers/cats.manager.js'
import * as userService from '../services/users.service.js'
import * as utils from '../utils/utils.js'
import { format, formatDate } from 'date-fns'
import CatDto from '../dto/cat.dto.js'
import CatVaccinesDto from '../dto/catVaccines.dto.js'
import * as vaccinesService from '../services/vaccines.service.js'

const createCat = async (cat, user) =>
{
    const formattedBirthday = utils.formatDate(cat.birthday);
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
    await getCatById(cid, user);
    const updatedCat = await catsManager.findByIdAndUpdate(cid, cat, { new: true });
    return updatedCat
}

const deleteCat = async (cid, user) =>
{
    await getCatById(cid, user);
    const deleted = await catsManager.findByIdAndDelete(cid);
    return deleted
}

const addVaccineToCat = async (cid, vid, vaccine, user) =>
{
    await getCatById(cid, user);
    const vaccineById = await vaccinesService.getVaccineById(vid);
    if (vaccineById.boosters)
    {
        const next_due_date = utils.nextDueDate(vaccine.date, vaccineById.boosters)
        vaccine.next_due_date = next_due_date;
    }
    vaccine.vaccine_id = vid;
    const updatedCat = await catsManager.findByIdAndUpdate(cid, { $push: { vaccinations: vaccine } })
    return updatedCat
}

const getCatVaccinations = async (cid, user) =>
{
    const catById = await getCatById(cid, user);
    const catVaccines = new CatVaccinesDto(catById)
    return catVaccines
}

const deleteVaccineFromCat = async (cid, vid, user) =>
{
    const catById = await getCatById(cid, user);
    utils.catHasVaccine(catById, vid)
    const updatedCat = utils.removeVaccine(catById, vid);
    const result = await catsManager.findByIdAndUpdate(cid, updatedCat);
    return result
}

export { createCat, getCats, updateCat, getCatById, deleteCat, addVaccineToCat, getCatVaccinations, deleteVaccineFromCat }
