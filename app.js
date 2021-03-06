const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');


const app = express();
const PORT = process.env.PORT || 4059;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// IMPORT ROUTES
const tasksRoute = require('./routes/tasks');
const homeRoute = require('./routes/home');

//Dummy Test

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    });
});

app.use(cors());
app.use('/tasks', tasksRoute);
app.use('/', homeRoute);




// CONNECT TO DB

mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true },
    () => console.log('Connected to DB!'),
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});