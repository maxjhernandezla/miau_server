import express from 'express';
import cors from 'cors';
import './config/dotenv.config.js';
import SoundRouter from './routes/sound.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes

const soundRouter = new SoundRouter();

app.use('/api/sounds', soundRouter.getRouter())

app.listen(process.env.PORT, () =>
{
    console.log(`Server is running on port ${process.env.PORT}`);
});