const express = require('express');
const dotenv = require('dotenv');
const users = require('./routes/users');
const auth = require('./routes/auth');
const doctor = require('./routes/doctor');
const pacient = require('./routes/pacient');


const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config({path: './config/config.env'});

// connect to database
connectDB();
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));
app.use('/api/v1/users', users);
app.use('/api/v1/auth', auth);
app.use('/api/v1/doctor', doctor);
app.use('/api/v1/pacient', pacient);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode, on port: ${PORT}`));