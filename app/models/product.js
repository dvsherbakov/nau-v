const { Schema, model, Types } = require('mongoose')

const productSchema = new Schema({
  id: Number,
  name: String,
  price: Types.Decimal128,
})

module.exports = model('Product', productSchema)
