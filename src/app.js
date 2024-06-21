import express from 'express';
import cors from 'cors';
import './config/dotenv.config.js';
import SoundsRouter from './routes/sounds.router.js';
import UsersRouter from './routes/users.router.js';
import CatsRouter from './routes/cats.router.js'
import VaccinesRouter from './routes/vaccines.router.js';
import './dao/db.config.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes

const soundsRouter = new SoundsRouter();
const usersRouter = new UsersRouter();
const catsRouter = new CatsRouter();
const vaccinesRouter = new VaccinesRouter();

app.use('/api/sounds', soundsRouter.getRouter())
app.use('/api/users', usersRouter.getRouter())
app.use('/api/cats', catsRouter.getRouter())
app.use('/api/vaccines', vaccinesRouter.getRouter())

app.listen(process.env.PORT, () =>
{
    console.log(`Server is running on port ${process.env.PORT}`);
});