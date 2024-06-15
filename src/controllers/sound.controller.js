import * as soundService from '../services/sound.service.js'

const reproduce = async (req, res) =>
{
    try
    {
        const audioStream = await soundService.reproduce();
        // Configurar el tipo de contenido
        res.setHeader('Content-Type', 'audio/mpeg');

        // ms.pipe(req, res, response.data.responseUrl);

        audioStream.pipe(res);
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
    reproduce
}