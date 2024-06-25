import * as soundsManager from '../dao/managers/sounds.manager.js'
import axios from 'axios'

const getSounds = async () =>
{
    const sounds = await soundsManager.getSounds();
    if (!sounds) throw new Error('Any sounds where found');
    return sounds
}

const getSoundById = async (sid) =>
{
    const sound = await soundsManager.findById(sid);
    if (!sound) throw new Error('Sound not found')
    return sound
}

const createSound = async (sound, user) =>
{
    // userIsAdmin(user);
    const newSound = await soundsManager.create(sound);
    if (!newSound) throw new Error('Sound not created')
    return newSound;
}

const updateSound = async (sid, sound, user) =>
{
    // userIsAdmin(user);
    await getSoundById(sid);
    const updatedSound = await soundsManager.findByIdAndUpdate(sid, sound)
    return updatedSound;
}

const deleteSound = async (sid, user) =>
{
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
        if (!response) throw new Error('An error occurred while retrieving the audio')
        return { audioStream: response.data, sound: sound } // Devolver el stream de datos
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
