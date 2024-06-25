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

const getCatVaccinations = async (req, res) =>
{
    try
    {
        const cid = req.params.cid;
        const vaccines = await catsService.getCatVaccinations(cid, req.user);
        res.status(200).json(vaccines);
    } catch (error)
    {
        res.status(500).send({ message: error.message })

    }
}

const addVaccineToCat = async (req, res) =>
{
    try
    {
        const cid = req.params.cid;
        const vid = req.params.vid;
        const vaccine = req.body;
        const result = await catsService.addVaccineToCat(cid, vid, vaccine, req.user);
        res.status(201).json(result);
    } catch (error)
    {
        res.status(500).send({ message: error.message })

    }
}

const deleteVaccineFromCat = async (req, res) =>
{
    try
    {
        const cid = req.params.cid;
        const vid = req.params.vid;
        const result = await catsService.deleteVaccineFromCat(cid, vid, req.user);
        res.status(204).json(result)
    } catch (error)
    {
        res.status(500).send({ message: error.message })

    }
}

const updateVaccineFromCat = async (req, res) =>
{
    try
    {
        const cid = req.params.cid;
        const vid = req.params.vid;
        const vaccine = req.body;
        const result = await catsService.updateVaccineFromCat(cid, vid, vaccine, req.user)
        res.status(200).json(result)
    } catch (error)
    {
        res.status(500).send({ message: error.message })

    }
}



export { createCat, getCats, updateCat, deleteCat, getCatById, getCatVaccinations, updateVaccineFromCat, deleteVaccineFromCat, addVaccineToCat }