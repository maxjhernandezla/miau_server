import * as callsService from '../services/calls.service.js'

const getCalls = async (req, res) =>
{
    try
    {
        const calls = await callsService.getSounds();
        res.send(calls)
    } catch (error)
    {
        res.status(500).send({ message: error.message })
    }
}

const getCallById = async (req, res) =>
{
    try
    {
        const sid = req.params.sid;
        const calls = await callsService.getCallById(sid)
        return calls;
    } catch (error)
    {
        res.status(500).send({ message: error.message })
    }
}

const createCall = async (req, res) =>
{
    try
    {
        const createdCall = await callsService.createCall(req.body, req.user);
        res.send(createdCall);
    } catch (error)
    {
        res.status(500).send({ message: error.message })
    }
}

const updateCall = async (req, res) =>
{
    try
    {
        const cid = req.params.cid;
        const updatedCall = await callsService.updateSound(cid, req.body, req.user)
        res.send(updatedCall)
    } catch (error)
    {
        res.status(500).send({ message: error.message })
    }
}

const deleteCall = async (req, res) =>
{
    try
    {
        const cid = req.params.cid;
        const deletedCall = await callsService.deleteCall(cid, req.user)
        res.send(deletedCall)
    } catch (error)
    {
        res.status(500).send({ message: error.message })
    }
}

const reproduce = async (req, res) =>
{
    try
    {
        const cid = req.params.cid;
        const result = await callsService.reproduce(cid);
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
    getCalls,
    getCallById,
    createCall,
    updateCall,
    deleteCall
}