import express from 'express';
import dotenv from 'dotenv';
import ConnectDB from './Database/Config.js';
import userRouter from './Routers/User.Router.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

ConnectDB();

app.options('*', cors());

app.use('/api/user', userRouter);

app.listen(port, () => {
    console.log(`App is listening on port-${port}`);
});