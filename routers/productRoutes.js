const express = require('express')
const router = express.Router()
const {createProduct,getProduct,updateProduct,deleteProduct} = require('../controllers/productController')

router.post('/add', createProduct)
router.get('/get',getProduct)
router.put('/update/:id',updateProduct)
router.delete('/delete/:id',deleteProduct)

module.exports = router