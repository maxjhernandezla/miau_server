import * as catsService from '../services/cats.service.js'

const createCat = async (req, res) =>
{
    try
    {
        const cat = req.body;
        const user = req.user;
        const newCat = await catsService.createCat(cat, user);
        res.status(201).json(newCat);
    } catch (error)
    {
        console.error(error)
    }
}

export { createCat }