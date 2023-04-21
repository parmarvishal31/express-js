const User = require("../models/userModel")

const getUser = (req, res) => {
    res.send({
        success: true,
        message: "wow very good"
    })
}

const addUser = (req, res) => {

    const { name } = req.body
    res.json({
        success: true,
        message: `Welcome ${name}`
    })
    console.log(JSON.stringify(req.body));

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

module.exports = { getUser, addUser, createUser }