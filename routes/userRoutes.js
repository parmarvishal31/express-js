const express = require('express')
const { getUser, addUser } = require('../controllers/userController')

const routers = express.Router()

// end point 

routers.get("/", getUser)
routers.post("/adduser", addUser)

module.exports = routers