const mongoose = require('mongoose')
require('dotenv').config()


const connectDB = async() => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('connect to database');
        
    } catch (error) {
        console.log('failed connection ',error.message);
        
    }
}
module.exports = connectDB