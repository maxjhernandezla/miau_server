import * as vaccinesService from '../services/vaccines.service.js'

const getVaccines = async (req, res) =>
{
    try
    {
        const vaccines = await vaccinesService.getVaccines()
        res.status(200).json(vaccines)
    } catch (error)
    {
        res.status(500).json({ message: error.message });

    }
}
const getVaccineById = async (req, res) =>
{
    try
    {
        const vid = req.params.vid;
        const vaccine = await vaccinesService.getVaccineById(vid)
        res.status(200).json(vaccine)
    } catch (error)
    {
        res.status(500).json({ message: error.message });

    }
}
const updateVaccine = async (req, res) =>
{
    try
    {
        const vid = req.params.vid;
        const vaccine = req.body;
        const updatedVaccine = await vaccinesService.updateVaccine(vid, vaccine)
        res.status(200).json(updatedVaccine)
    } catch (error)
    {
        res.status(500).json({ message: error.message });

    }
}
const createVaccine = async (req, res) =>
{
    try
    {
        const vaccine = req.body;
        const newVaccine = await vaccinesService.createVaccine(vaccine)
        res.status(201).json(newVaccine)
    } catch (error)
    {
        res.status(500).json({ message: error.message });

    }
}
const deleteVaccine = async (req, res) =>
{
    try
    {
        const vid = req.params.vid;
        const deletedVaccine = await vaccinesService.deleteVaccine(vid)
        res.status(200).json(deletedVaccine)
    } catch (error)
    {
        res.status(500).json({ message: error.message });

    }
}

export { getVaccines, getVaccineById, updateVaccine, deleteVaccine, createVaccine }