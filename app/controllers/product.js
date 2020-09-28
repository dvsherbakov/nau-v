const mongoose = require('mongoose')
const Product = require('../models/product.js')

const getAll = (req, res) => {
  console.log('getAll')
  Product.find()
    .exec()
    .then((products) => res.json(products))
    .catch((err) => res.status(500).json(err))
}

const create = (req, res) => {
  Product.create(req.body)
    .then((createdProduct) => res.json(createdProduct))
    .catch((err) => res.status(500).json(err))
}

const update = (req, res) => {
  Product.findByIdAndUpdate({ id: req.params.id }, req.body)
    .exec()
    .then((product) => res.json(product))
    .catch((err) => res.status(500).json(err))
}

const remove = (req, res) => {
  Product.deleteOne({ id: req.params.id })
    .exec()
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(500).json(err))
}

module.exports = {
  getAll,
  create,
  update,
  remove,
}
