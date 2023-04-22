const test = require("../models/testModel")
const User = require("../models/userModel")

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json({
            success: true,
            totalUser: users.length,
            users
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            msg: "get all users error",
            error: error.message
        })
    }
}

const getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (user) {
            res.status(200).json({
                success: true,
                user
            })
        } else {
            res.status(400).json({
                success: false,
                msg: "user not found",
                error: error.message
            })
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            msg: "get single user error",
            error: error.message
        })
    }
}

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password })
        res.status(201).json({
            // success: true,
            user
        })
    } catch (error) {
        console.log(`Creating user error =${error}`);
    }
}

const testData = async (req, res) => {
    try {
        const testDt = req.body;
        console.log(testDt);
        const testData = await test.create({ name: testDt.name, number: testDt.number })
        res.status(201).json({
            message: "success",
            testData
        })
    } catch (error) {
        console.log(`creat test data error${error}`);

    }
}

module.exports = { getUsers, createUser, testData, getSingleUser }