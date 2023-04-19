// import 
const express = require('express')
// rest object means express feture copy in app variable
const app = express()

// routes

app.get("/", (req, res) => {
    res.send("<h1>Learn Express</h1>")
})

// port
const PORT = 8000;

// server listen

app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
})