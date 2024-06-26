import express from 'express';
import cors from 'cors';
import './config/dotenv.config.js';
import CallsRouter from './routes/calls.router.js';
import UsersRouter from './routes/users.router.js';
import CatsRouter from './routes/cats.router.js'
import VaccinesRouter from './routes/vaccines.router.js';
import SoundsRouter from './routes/sounds.router.js';
import SessionsRouter from './routes/sessions.router.js';
import './dao/db.config.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes

const callsRouter = new CallsRouter();
const usersRouter = new UsersRouter();
const catsRouter = new CatsRouter();
const vaccinesRouter = new VaccinesRouter();
const soundsRouter = new SoundsRouter();
const sessionsRouter = new SessionsRouter()

app.use('/api/calls', callsRouter.getRouter())
app.use('/api/users', usersRouter.getRouter())
app.use('/api/cats', catsRouter.getRouter())
app.use('/api/sounds', soundsRouter.getRouter())
app.use('/api/vaccines', vaccinesRouter.getRouter())
app.use('/api/sessions', sessionsRouter.getRouter())


app.listen(process.env.PORT, () =>
{
    console.log(`Server is running on port ${process.env.PORT}`);
});