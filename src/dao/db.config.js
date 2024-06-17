import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL;

try
{
    await mongoose.connect(MONGO_URL);
    console.log('*** Connected to DB ***')
} catch (error)
{
    console.error(error);
}