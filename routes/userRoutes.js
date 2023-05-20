const express = require('express')
const { createUser, testData, getUsers, getSingleUser, updateUser, deleteUser } = require('../controllers/userController')

const routers = express.Router()

// end point 
// create user 

routers.post('/create-user', createUser)

// test route
routers.post('/test', testData)
// all user get
routers.get("/get-users", getUsers)

// single user get by id params
routers.get('/get-user/:id', getSingleUser)

// update user
routers.put('/update-user/:id', updateUser);

// delete user 
routers.delete('/delete-user/:id', deleteUser)

module.exports = routers