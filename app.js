const express = require('express');
const hbs = require("hbs");

const app = express();

// views hbs
app.use(hbs);
app.set("view engine", "hbs");


// Routes 

app.use('/', require('./routes/index'));

app.use('/users', require('./routes/users'));




// PORT

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));