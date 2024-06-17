import * as soundsManager from '../dao/managers/sounds.manager.js'
import axios from 'axios'
import { userIsAdmin } from '../utils/utils.js';

const getSounds = async () =>
{
    const sounds = await soundsManager.getSounds();
    if (!sounds) throw new Error('Any sounds where found');
    return sounds
}

const getSoundById = async (sid) => {
    const sound = await soundsManager.findById(sid);
    if (!sound) throw new Error('Sound not found')
    return sound
}

const createSound = async (sound, user) => {
    // userIsAdmin(user);
    const newSound = await soundsManager.createSound(sound);
    if (!newSound) throw new Error('Sound not created')
    return newSound;
}

const updateSound = async (sid, sound, user) => {
    // userIsAdmin(user);
    await getSoundById(sid);
    const updatedSound = await soundsManager.findByIdAndUpdate(sid, sound)
    return updatedSound;
}

const deleteSound = async (sid, user) => {
    // userIsAdmin(user);
    await getSoundById(sid);
    const deletedSound = await soundsManager.findByIdAndDelete(sid)
    return deletedSound;
}

const reproduce = async (sid) =>
{
    try
    {
        const sound = await getSoundById(sid);
        // Hacer la solicitud para obtener el archivo como stream
        const response = await axios({
            url: sound.url,
            method: 'GET',
            responseType: 'stream'
        });

        return {audioStream: response.data, sound}; // Devolver el stream de datos
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
    getSounds,
    getSoundById,
    createSound,
    updateSound, deleteSound
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