const route = require('express').Router()
const ControllerUser = require('../controllers/user')
const ControllerItem = require('../controllers/item')
const authenticate = require('../middlewares/authenticate')

route.get('/', (req, res) => {res.status(200).json({message: 'Home'})})
route.post('/login', ControllerUser.login)
route.post('/register', ControllerUser.create)
route.put('/addToCart', authenticate, ControllerUser.addToCart)
route.put('/removeFromCart', authenticate, ControllerUser.removeFromCart)
route.put('/removeAll', authenticate, ControllerUser.removeAll)


route.get('/users', ControllerUser.findAll)
route.get('/users/:id', ControllerUser.findOne)
route.put('/users/:id', ControllerUser.update)
route.delete('/users/:id', ControllerUser.delete)

route.post('/items', ControllerItem.create)
route.get('/items', ControllerItem.findAll)
route.get('/items/:id', ControllerItem.findOne)
route.put('/items/:id', ControllerItem.update)
route.delete('/items/:id', ControllerItem.delete)

route.use('/*', (req, res) => res.status(404).json({error: 'Not Found :('}))

module.exports = route