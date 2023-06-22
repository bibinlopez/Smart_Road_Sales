
const Product = require('../models/productSchema')
const { CustomAPIError } = require('../errors/custom-error')

const createProduct = async (req, res) => {
   req.body.user = req.user.userId;
   const product = new Product(req.body)
   const result = await product.save()
   return res.status(201).json({ data: result })
}

const getAllProduct = async (req, res) => {
   const product = await Product.find({})
   return res.status(200).json({ count: product.length, data: product })
}


const getSingleProduct = async (req, res) => {
   const { productId: id } = req.body
   const product = await Product.findById(id).populate('admin')
   if (!product) {
      throw new CustomAPIError(`No product with the id: ${id}`, 404)
   }
   return res.status(200).json({ data: product })
}

const updateProduct = async (req, res) => {
   const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
   if (!product) {
      throw new CustomAPIError(`No product with the id: ${req.params.id}`, 404)
   }
   return res.status(200).json({ data: product })
}

const deleteProduct = async (req, res) => {
   const product = await Product.findById(req.params.id).populate('user')
   if (!product) {
      throw new CustomAPIError(`No product with the id: ${req.params.id}`, 404)
   }
   await product.deleteOne()
   return res.status(200).json({ msg: 'Product deleted!!!' })
}

const uploadImage = async (req, res) => {
   res.send('upload image')
}



module.exports = {
   createProduct,
   getAllProduct,
   getSingleProduct,
   updateProduct,
   deleteProduct,
   uploadImage
}