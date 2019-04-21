const User = require('../model/user')
const {hash} = require('../helpers/bcryptjs')
const {compare} = require('../helpers/bcryptjs')
const {sign} = require('../helpers/jwt')
// const mongoose = require('mongoose')

class ControllerUser {
  static create(req, res) {
    let input = req.body
    if(!input.password) {
      res.status(401).json({message: 'Password required.'})
    }
    let newUser = {
      name: input.name,
      email: input.email,
      password: hash(input.password),
      role: input.role || 'user'
    }
    User.create(newUser)
      .then(data => {
        res.status(201).json({ data })
      })
      .catch(err => {
        res.status(500).json({ message: err.message })
      })
  }
  static findAll(req, res) {
    User.find()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => res.status(500).json({message: err.message}))
  }
  static findOne(req, res) {
    // console.log({message: 'masuk'})
    User.findOne({_id: req.params.id})
      .populate('carts')
      .then(user => {
        // console.log({user})
        res.status(200).json(user)
      })
      .catch(err => {res.status(500).json({message: err.message})})
  }
  static update(req, res) {
    User.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => res.status(500).json({message: err.message}))
  }
  static delete(req, res) {
    User.findOneAndDelete({_id: req.params.id})
      .then(user => {
        const response = {
          message: 'Successfully deleted user.',
          id: req.params.id
        }
        res.status(200).json(response)
      })
      .catch(err => {res.status(500).json({message: err.message})})
  }
  static login(req, res) {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          res.status(401).json({ message: 'user tidak ada' })
        } else {
          // console.log(req.body.password, user.password)
          if (!compare(req.body.password, user.password)) {
            res.status(401).json({ message: 'password salah' })
          } else {
            // console.log({user, dari: 'login'})
            let obj = {
              id: user._id,
              email: user.email,
              name: user.name
            }
            let access_token = sign(obj)
            res.status(201).json({
              access_token: access_token,
              name: user.name,
              email: user.email,
              id: user._id
            })
          }
        }
      })
      .catch(err => {
        res.status(500).json({ err: err.message })
      })
  }
  static addToCart(req, res) {
    // console.log({body: req.body, params: req.params, authenticated: req.authenticated})
    User.findOne({_id: req.authenticated.id})
      .then(user => {
        // console.log({masuk: 'then1'})
        // console.log({user})
        user.carts.push(req.body.itemId)
        return user.save()
        // return user.save()
      })
      .then(user => {
        // console.log({masuk: 'then2'})
        return User.findOne({_id: req.authenticated.id}).populate('carts')
      })
      .then(user => {
        // console.log({masuk: 'then3'})
        res.status(200).json(user.carts)
      })
      .catch(err => {/* console.log({masuk: 'then3'}); */ res.status(500).json({err: err.message})})
  }
  static removeFromCart(req, res) {
    console.log({body: req.body, params: req.params, authenticated: req.authenticated})
    User.findOne({_id: req.authenticated.id})
      .then(user => {
        let deleting = user.carts.indexOf(req.body.itemId)
        user.carts.splice(deleting, 1)
        return user.save()
      })
      .then(user => {
        return User.findOne({_id: req.authenticated.id}).populate('carts')
      })
      .then(user => {
        res.status(200).json(user.carts)
      })
      .catch(err => {res.status(500).json({err: err.message})})
  }
  static removeAll(req, res) {
    // console.log({body: req.body, params: req.params, authenticated: req.authenticated})
    User.findOne({_id: req.authenticated.id})
      .then(user => {
        user.carts = user.carts.filter(item => item != req.body.itemId)
        return user.save()
      })
      .then(user => {
        return User.findOne({_id: req.authenticated.id}).populate('carts')
      })
      .then(user => {
        res.status(200).json(user.carts)
      })
      .catch(err => {res.status(500).json({err: err.message})})
  }
}

module.exports = ControllerUser