import express from 'express';
import cors from 'cors';
import './config/dotenv.config.js';
import SoundsRouter from './routes/sound.router.js';
import UserRouter from './routes/user.router.js';
import CatsRouter from './routes/cats.router.js'
import './dao/db.config.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes

const soundsRouter = new SoundsRouter();
const userRouter = new UserRouter();
const catsRouter = new CatsRouter();

app.use('/api/sounds', soundsRouter.getRouter())
app.use('/api/users', userRouter.getRouter())
app.use('/api/cats', catsRouter.getRouter())

app.listen(process.env.PORT, () =>
{
    console.log(`Server is running on port ${process.env.PORT}`);
});