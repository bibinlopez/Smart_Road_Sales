

const Order = require('../models/orderSchema')


const getAllOrders = async (req, res) => {
   res.send('get All Orders')
}


const getSingleOrder = async (req, res) => {
   res.send('getSigleOrder')
}


const getCurrentUserOrders = async (req, res) => {
   res.send('getCurrentUserOrders')
}


const createOrder = async (req, res) => {
   res.send('createOrder')
}


const udpdateOrder = async (req, res) => {
   res.send('udpdateOrder')
}

module.exports = {
   getAllOrders,
   getSingleOrder,
   getCurrentUserOrders,
   createOrder,
   udpdateOrder
}


