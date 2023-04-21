const express = require('express')
const { getUser, addUser, createUser, testData } = require('../controllers/userController')

const routers = express.Router()

// end point 
// create user 

routers.post('/create-user', createUser)

// test route
routers.post('/test', testData)

routers.get("/", getUser)
routers.post("/adduser", addUser)

module.exports = routers