const express = require('express');
const dotenv = require('dotenv');
const users = require('./routes/users');

dotenv.config({path: './config/config.env'});


const app = express();
app.use('/api/v1/users', users);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode, on port: ${PORT}`));