require('dotenv').config({path: './.env.local'})
const express = require('express')
const app = express()
const port = 3000
const route = require('./routes')
const cors = require('cors')
const mongoose = require('mongoose')
let db = `mongodb://localhost:27017/ecommerce-${process.env.NODE_ENV}`
mongoose.connect(db,{useNewUrlParser : true})

app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use('/', route)
app.listen(port,() => {
  console.log(`listening on port: ${port}!`)
})

module.exports = app