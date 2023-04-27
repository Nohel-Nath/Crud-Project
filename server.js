
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');



const app = express()
dotenv.config( { path : 'config.env'} )

const connectDB = require('./server/database/connection');


const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));

connectDB();


app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine", "ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))
app.use('/CSS',express.static(path.resolve(__dirname,"assets/css")))
app.use('/IMG',express.static(path.resolve(__dirname,"assets/img")))
app.use('/JS',express.static(path.resolve(__dirname,"assets/js")))


app.use('/', require('./server/routes/router.js'))


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

