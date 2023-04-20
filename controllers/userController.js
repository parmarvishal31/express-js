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

module.exports = { getUser, addUser }