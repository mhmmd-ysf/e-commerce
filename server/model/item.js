const mongoose = require('mongoose')
const { hash } = require('../helpers/bcryptjs')

let ItemSchema = new mongoose.Schema({
  name: String,
  tags: Array,
  price: Number,
  description: String,
  featuredImg: String,
  stock: Number,
})

let Item = mongoose.model('Item', ItemSchema)

module.exports = Item