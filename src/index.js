import express from 'express';
import morgan from 'morgan';
import router from './routes/task.routes.js';
import {dirname, join} from 'path';
import { fileURLToPath } from 'url';
import mongooseDB from './database.js';

const app = express();

// Settings
app.set('port', process.env.PORT || 3001); // {1}

// Middlewares
app.use(morgan('dev')); // {2}
app.use(express.json()); // {3}

// Routes
app.use('/api', router); // http//localhost:3001/api

// Statict files
const dir_public = join(dirname(fileURLToPath(import.meta.url)), 'public'); // Direccion de carpeta public
app.use(express.static(dir_public)); // {4}

// Starting Server
app.listen(app.get('port'), () => {
    console.log(`server is listening on port ${app.get('port')}`);
});
