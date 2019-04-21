const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, `Name required`],
  },
  email: {
    type: String,
    required: [true, 'Email required'],
  },
  password: {
    type: String,
    required: [true, 'Password required'],
  },
  role: String,
  carts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }]
})

let User = mongoose.model('User', userSchema)

User.schema.path('email').validate(function (input) {
  User.findOne({email: input})
    .then(found => {
      if(found) {
        return false
      } else {
        return true
      }
    })
    .catch(err => {console.log(err)})
}, 'Email has been used.')

module.exports = User