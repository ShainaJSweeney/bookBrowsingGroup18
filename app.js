const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//connect to database
mongoose.connect(config.database, {useNewUrlParser: true, useUnifiedTopology: true});

//this lets us know if its connnected
mongoose.connection.on('connnected', () => {
    console.log('Connected to database '+config.database);
});

//lets us know if there was an error
mongoose.connection.on('error', (err) => {
    console.log('Database error: '+err);
});

const app = express();

const users = require('./routes/users');

//port number
const port = 8000;

//cors middlewaare
app.use(cors());

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(express.json());


//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/Users', users);

//index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//start server
app.listen(port, () => {
    console.log('Server started on port '+port);
});