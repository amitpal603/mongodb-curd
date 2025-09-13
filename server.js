const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
const productRoutes = require('./routers/productRoutes')
const app = express()
app.use(express.json())
app.use('/product',productRoutes)
connectDB()

app.get('/',(req,res) => {
    return res.status(200).json({
        success:true,
        message:'Home page will be run'
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT,() => {
    console.log(`server listen on PORT http://localhost:${[PORT]}`);
    
})