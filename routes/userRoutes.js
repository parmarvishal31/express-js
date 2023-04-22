const express = require('express')
const { createUser, testData, getUsers } = require('../controllers/userController')

const routers = express.Router()

// end point 
// create user 

routers.post('/create-user', createUser)

// test route
routers.post('/test', testData)

routers.get("/get-users", getUsers)

module.exports = routers