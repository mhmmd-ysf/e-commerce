const mongoose = require('mongoose')
const { hash } = require('../helpers/bcryptjs')

let ItemSchema = new mongoose.Schema({
  name: String,
  tags: Array,
  price: Number,
  description: String,
  featuredImg: String,
  // associateIdSingular: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  // associateIdPlural: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // }]
})

let Item = mongoose.model('Item', ItemSchema)

module.exports = Item