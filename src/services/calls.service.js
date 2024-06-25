import * as callsManager from '../dao/managers/calls.manager.js'
import axios from 'axios'
import { userIsAdmin } from '../utils/utils.js';

const getCalls = async () =>
{
    const sounds = await callsManager.getCalls();
    if (!sounds) throw new Error('Any sounds where found');
    return sounds
}

const getCallById = async (cid) => {
    const sound = await callsManager.findById(cid);
    if (!sound) throw new Error('Sound not found')
    return sound
}

const createCall = async (call, user) => {
    // userIsAdmin(user);
    const newSound = await callsManager.create(call);
    if (!newSound) throw new Error('Sound not created')
    return newSound;
}

const updateCall = async (cid, call, user) => {
    // userIsAdmin(user);
    await getCallById(cid);
    const updatedSound = await callsManager.findByIdAndUpdate(cid, call)
    return updatedSound;
}

const deleteCall = async (cid, user) => {
    // userIsAdmin(user);
    await getCallById(cid);
    const deletedSound = await callsManager.findByIdAndDelete(cid)
    return deletedSound;
}

const reproduce = async (cid) =>
{
    try
    {
        const call = await getCallById(cid);
        // Hacer la solicitud para obtener el archivo como stream
        const response = await axios({
            url: call.url,
            method: 'GET',
            responseType: 'stream'
        });
        if (!response) throw new Error('An error occurred while retrieving the audio')
        return {audioStream: response.data, call: call} // Devolver el stream de datos
    } catch (error)
    {
        if (error.response && error.response.status === 404)
        {
            throw new Error('Audio not found');
        } else
        {
            throw new Error('An error occurred while retrieving the audio');
        }
    }
}

export
{
    reproduce,
    getCalls,
    getCallById,
    createCall,
    updateCall, deleteCall
}

// const reproduce = async (req, res) =>
//     {
//         const fileUrl = 'https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/sounds%2Fmiau_1.mp3?alt=media&token=e8369036-87be-4a0b-be21-408ccaf65541';
    
//         try
//         {
//             // Hacer la solicitud para obtener el archivo como stream
//             const response = await axios({
//                 url: fileUrl,
//                 method: 'GET',
//                 responseType: 'stream'
//             });
    
//             return response.data; // Devolver el stream de datos
//         } catch (error)
//         {
//             if (error.response && error.response.status === 404)
//             {
//                 throw new Error('Audio not found');
//             } else
//             {
//                 throw new Error('An error occurred while retrieving the audio');
//             }
//         }
//     }