const express = require('express');
const connectToDatabase = require('./db');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');
/* You can create as many routes as possible */
const userCommentsRoutes = require('./routes/userCommentsRoutes')

/* Your MongoDB connection string is in the .env file. dependencies are in package.json file */
connectToDatabase(process.env.MONGO_URI)

/* Here you can add other middleware here*/
app.use('/userComments', userCommentsRoutes)

const PORT = 8888

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))