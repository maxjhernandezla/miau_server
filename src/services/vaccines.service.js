import * as vaccinesManager from '../dao/managers/vaccines.manager.js'

const createVaccine = async (vaccine) =>
{

    const result = await vaccinesManager.create(vaccine)
    return result;
}
const getVaccineById = async (vid) =>
{
    const result = await vaccinesManager.findById(vid)
    if (!result) throw new Error('Vaccine not found')
    return result
}
const getVaccines = async (params) =>
{
    const result = await vaccinesManager.getAll(params)
    return result
}
const updateVaccine = async (vid, vaccine) =>
{
    await getVaccineById(vid)
    const result = await vaccinesManager.findByIdAndUpdate(vid, vaccine)
    return result
}
const deleteVaccine = async (vid) =>
{
    await getVaccineById(vid)
    const result = await vaccinesManager.findByIdAndDelete(vid)
    return result

}

export { getVaccines, getVaccineById, createVaccine, updateVaccine, deleteVaccine }
