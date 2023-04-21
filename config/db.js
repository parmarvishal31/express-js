const mongoose = require('mongoose')

const connectdb = async () => {
    const url = "mongodb+srv://vishalparmar1553:Vishal1553@expressjs.zreakhj.mongodb.net/expressjs"
    try {
        const conn = await mongoose.connect(url)
        console.log(`Mongodb conectio successfully ${conn.connection.host}`.green.bold);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectdb;     