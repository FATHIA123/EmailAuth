const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

// DB config 
// const db = require('./config/keys').MongoURI;

// connect to MongoDB
mongoose.connect( 'mongodb+srv://EmailAuthUser:EmailAuthUser@emailauth-tqn4f.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => console.log('MongoDB connected...')).catch(err => console.log(err) );
// mongoose.connect( 'db', { useNewUrlParser: true })
// .then(() => console.log('MongoDB connected...'))
// .catch(err => console.log(err) );

// const db = require('./config/keys').MongoURI;


// setup hbs view engine 
// app.set("view engine", "hbs");

//location of your views folder
// app.set('views', __dirname + '/views');


// EJS

app.use(expressLayouts);
app.set('view engine', 'ejs');




// Bodyparser 

app.use(express.urlencoded({ extended: false }))







// Routes 

app.use('/', require('./routes/index'));

app.use('/users', require('./routes/users'));




// PORT

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));