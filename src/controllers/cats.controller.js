import * as catsService from '../services/cats.service.js'

const getCats = async (req, res) =>
{
    try
    {
        const cats = await catsService.getCats(req.user)
        res.status(200).send(cats)
    } catch (error)
    {
        res.status(500).send({ message: error.message })
    }
}

const getCatById = async (req, res) =>
{
    try
    {
        const cid = req.params.cid;
        const cats = await catsService.getCatById(cid, req.user)
        res.status(200).send(cats)
    } catch (error)
    {
        res.status(500).send({ message: error.message })
    }
}

const createCat = async (req, res) =>
{
    try
    {
        const cat = req.body;
        const newCat = await catsService.createCat(cat, req.user);
        res.status(201).json(newCat);

    } catch (error)
    {
        res.status(500).send({ message: error.message })

    }
}

const updateCat = async (req, res) =>
{
    try
    {
        const cid = req.params.cid;
        const cat = req.body;
        const updatedCat = await catsService.updateCat(cid, cat, req.user);
        res.status(200).json(updatedCat);
    } catch (error)
    {
        res.status(500).send({ message: error.message })
    }
}

const deleteCat = async (req, res) =>
{
    try
    {
        const cid = req.params.cid;
        await catsService.deleteCat(cid, req.user);
        res.status(204).send('Deleted successfully')
    } catch (error)
    {
        res.status(500).send({ message: error.message })
    }
}

export { createCat, getCats, updateCat, deleteCat, getCatById }