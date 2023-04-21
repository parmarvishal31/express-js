const express = require('express')
const { getUser, addUser, createUser } = require('../controllers/userController')

const routers = express.Router()

// end point 
// create user 

routers.post('/create-user', createUser)

routers.get("/", getUser)
routers.post("/adduser", addUser)

module.exports = routers