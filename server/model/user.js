const mongoose = require('mongoose')
const { hash } = require('../helpers/bcryptjs')
const { compare } = require('../helpers/bcryptjs')

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  carts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }]
})

// userSchema.pre('save', function (next) {
//   let temp = hash(this.password, 10)
//   if(compare(this.password, temp)) {
//     this.password = hash(this.password, 10)
//   }
//   next()
// })

let User = mongoose.model('User', userSchema)

module.exports = User