const Product = require("../models/productSchema");

const createProduct = async (req, res) => {
  const { item, title, category, price, description } = req.body;
  try {
    const addProduct = new Product({
      item,
      title,
      category,
      price,
      description,
    });
    await addProduct.save();

    return res.status(200).json({
      success: true,
      message:'create successfully '
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Internal server Error ${error.message}`,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const getAllProduct = await Product.find({});

    if (!getAllProduct && getAllProduct.length > 0) {
      return res.status(404).json({
        success: false,
        message: "there are not any product exist",
      });
    }

    return res.status(200).json({
      success: true,
      getAllProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Internal server Error ${error.message}`,
    });
  }
};

const updateProduct = async (req, res) => {
  
  const { id } = req.params;
  const { item, title, category, price, description } = req.body;
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      id,
      { item, title, category, price, description },
      { new: true });

      return res.status(200).json({
        success:true,
        message:"updated product successfully",
        updateProduct
      })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Internal server Error ${error.message}`,
    });
  }
};

const deleteProduct = async (req, res) => {
    const {id} = req.body
  try {
    const deleteProduct = await Product.findByIdAndDelete(id)

    return res.status(200).json({
        success:true,
        message:'deleted product successfully',
        deleteProduct
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Internal server Error ${error.message}`,
    });
  }
};

module.exports = { createProduct, getProduct, updateProduct, deleteProduct };
