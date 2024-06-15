import axios from 'axios'

const reproduce = async (req, res) =>
{
    const fileUrl = 'https://firebasestorage.googleapis.com/v0/b/huellapp-579e9.appspot.com/o/sounds%2Fmiau_1.mp3?alt=media&token=e8369036-87be-4a0b-be21-408ccaf65541';

    try
    {
        // Hacer la solicitud para obtener el archivo como stream
        const response = await axios({
            url: fileUrl,
            method: 'GET',
            responseType: 'stream'
        });

        return response.data; // Devolver el stream de datos
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
    reproduce
}