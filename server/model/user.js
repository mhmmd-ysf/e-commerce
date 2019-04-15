const mongoose = require('mongoose')
const { hash } = require('../helpers/bcryptjs')

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  carts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }]
})

userSchema.pre('save', function (next) {
  this.password = hash(this.password, 10)
  next()
})

let User = mongoose.model('User', userSchema)

module.exports = User