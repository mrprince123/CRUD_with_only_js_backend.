const express = require('express');
const mongoose = require('mongoose');

// GET :  http://localhost:3000/aliens
// GET : http://localhost:3000/aliens/<id>
// POST : http://localhost:3000/aliens
// PATCH : http://localhost:3000/aliens/<id>

const app = express();



mongoose.connect('mongodb://localhost/AlienDBex');

const con = mongoose.connection
con.on('open', function(){
    console.log("Database is Connected....")
});

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)


app.listen(3000, function(){
    console.log("Server is running on the port 3000");
});

