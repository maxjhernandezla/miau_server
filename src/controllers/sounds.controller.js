import * as soundsService from '../services/sounds.service.js'

const getSounds = async (req, res) =>
{
    try
    {
        const sounds = await soundsService.getSounds();
        res.send(sounds)
    } catch (error)
    {
        res.status(500).send({ message: error.message })
    }
}

const getSoundById = async (req, res) =>
{
    try
    {
        const sid = req.params.sid;
        const sound = await soundsService.getSoundById(sid)
        return sound;
    } catch (error)
    {
        res.status(500).send({ message: error.message })
    }
}

const createSound = async (req, res) =>
{
    try
    {
        const createdSound = await soundsService.createSound(req.body, req.user);
        res.send(createdSound);
    } catch (error)
    {
        res.status(500).send({ message: error.message })
    }
}

const updateSound = async (req, res) =>
{
    try
    {
        const sid = req.params.sid;
        const updatedSound = await soundsService.updateSound(sid, req.body, req.user)
        res.send(updatedSound)
    } catch (error)
    {
        res.status(500).send({ message: error.message })
    }
}

const deleteSound = async (req, res) =>
{
    try
    {
        const sid = req.params.sid;
        const updatedSound = await soundsService.deleteSound(sid, req.user)
        res.send(updatedSound)
    } catch (error)
    {
        res.status(500).send({ message: error.message })
    }
}

const reproduce = async (req, res) =>
{
    try
    {
        const sid = req.params.sid;
        const result = await soundsService.reproduce(sid);
        // Configurar el tipo de contenido
        res.setHeader('Content-Type', 'audio/mpeg');
        result.audioStream.pipe(res);
    } catch (error)
    {
        console.error(error.message);

        if (error.message === 'Audio not found')
        {
            res.status(404).send('Audio not found');
        } else
        {
            res.status(500).send('An error occurred while retrieving the audio');
        }
    }
}

export
{
    reproduce,
    getSounds,
    getSoundById,
    createSound,
    updateSound,
    deleteSound
}