const Item = require('../model/item')

class ControllerItem {
  static create(req, res) {
    let input = req.body
    let newItem = {
      name: input.name,
      tags: [],
      price: input.price,
      stock: input.stock,
      description: input.description,
      featuredImg: input.featuredImg,
    }
    Item.create(newItem)
      .then(data => {
        res.status(201).json({ data })
      })
      .catch(err => {console.log(err); res.status(500).json({ message: err.message })})
  }
  static findAll(req, res) {
    Item.find()
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => res.status(500).json({ message: err.message }))
  }
  static findOne(req, res) {
    Item.findOne({ _id: req.params.id })
      .then(item => {
        res.status(200).json(item)
      })
      .catch(err => { res.status(500).json({ message: err.message }) })
  }
  static update(req, res) {
    console.log('masuk edit')
    console.log(req.body)
    console.log(req.params.id)
    Item.updateOne({ _id: req.params.id }, {$set: req.body}, { new: true })
      .then(item => {
        console.log(item)
        res.status(200).json(item)
      })
      .catch(err => res.status(500).json({ message: err.message }))
  }
  static delete(req, res) {
    Item.findOneAndDelete({ _id: req.params.id })
      .then(item => {
        const response = {
          message: 'Successfully deleted item.',
          id: req.params.id
        }
        res.status(200).json(response)
      })
      .catch(err => { res.status(500).json({ message: err.message }) })
  }
}

module.exports = ControllerItem