import * as catsManager from '../dao/managers/cats.manager.js'
import * as userService from '../services/user.service.js'
import mongoose from 'mongoose'

const createCat = async (cat, user) =>
{
    const newCat = {
        ...cat, birth_day: new Date()
    }
    const result = await catsManager.create(cat)

    await userService.findByIdAndUpdate(newCat.owner_id, { $push: { cats: result._id } })

    return result
}

export { createCat }
