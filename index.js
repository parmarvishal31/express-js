// import 
const express = require('express')
const colors = require('colors');
const bodyParser = require('body-parser')
const morgan = require('morgan')
// rest object means express feture copy in app variable
const app = express()

// middlelware

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

// routes

app.use("/api/v1/user", require("./routes/userRoutes"))

app.use('/api/v1/user', require('./routes/userRoutes'))

// port
const PORT = 8000;

// server listen

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`.underline.yellow.bold);
})