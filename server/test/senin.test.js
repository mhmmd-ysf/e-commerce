const chai = require('chai')
const { use, expect } = chai
chai.should()
const chaiHTTP = require('chai-http')
const app = require('../app')

use(chaiHTTP)

describe('Item routes (success):', function () {
  //? ================================ GET users done ================================
  it('GET /users => Should return an array of user objects.', function (done) {
    chai
      .request(app)
      .get('/users')
      .end((err, res) => {
        let result = res.body
        // console.log('res=====================================')
        // console.log(result)
        // console.log('res=====================================')
        result.should.be.a('array')
        result.forEach(item => {
          item.should.have.property('name')
          item.should.have.property('email')
          item.should.have.property('password')
        })
        done()
      })
  })
  //? ================================ GET users 1 done ================================
  it('GET /users/:id => Should return an object of user', function (done) {
    chai
      .request(app)
      .get('/users/5cb4b49a1f1268172c80dac2')
      .end((err, res) => {
        // console.log('res=====================================')
        // console.log(res.body)
        // console.log('res=====================================')
        res.body.should.be.a('object')
        res.body.should.have.property('name')
        res.body.should.have.property('email')
        res.body.should.have.property('password')
        done()
      })
  })
  //? ================================ POST users done ================================
  it('POST /users => Should return an object of created user', function (done) {
    let user = {
      name: 'Muhammad Yusuf',
      email: 'ucup@mail.com',
      password: '12345',
      carts: []
    }
    chai
      .request(app)
      .post('/register')
      .send(user)
      .end((err, res) => {
        res.body.should.be.a('object')
        res.body.should.have.property('name')
        res.body.should.have.property('email')
        res.body.should.have.property('password')
        done()
      })
  })
  //? ================================ PUT users done ================================
  it('PUT /users/:id => Should return an object of updated user', function (done) {
    let user2 = {
      name: 'Muhammad Yusuf2',
      email: 'ucup@mail.com2',
      password: '123452',
      // carts: ['Sepatu Staccatu', 'Baju Zoro', 2]
    }
    chai
      .request(app)
      .put('/users/5cb4a3b2c62f0f3c88f07e20')
      .send(user2)
      .end((err, res) => {
        // console.log('res=====================================')
        // console.log(res.body)
        // console.log('res=====================================')
        res.body.should.be.a('object')
        done()
      })
  })
  //? ================================ DELETE users done ================================
  it('DELETE /users/:id => should remove a user and return status code 204', function (done) {
    chai
      .request(app)
      .delete('/users/5cb4a3b2c62f0f3c88f07e20')
      .end((err, res) => {
        // console.log('res=====================================')
        // console.log(res.body)
        // console.log('res=====================================')
        res.body.should.be.a('object')
        done()
      })
  })
})

describe('Item routes (success):', function () {
  //? ================================ GET items done ================================
  it('GET /items => Should return an array of item objects.', function (done) {
    chai
      .request(app)
      .get('/items')
      .end((err, res) => {
        let result = res.body
        // console.log('res=====================================')
        // console.log(result)
        // console.log('res=====================================')
        result.should.be.a('array')
        result.forEach(item => {
          item.should.have.property('name')
          item.should.have.property('price')
          item.should.have.property('description')
          item.should.have.property('featuredImg')
          item.should.have.property('tags')
          item.should.have.property('stock')
        })
        done()
      })
  })
  //? ================================ GET items 1 done ================================
  it('GET /items/:id => Should return an object of item', function (done) {
    chai
      .request(app)
      .get('/items/5cb9c981ee7070650cd3ddd0')
      .end((err, res) => {
        let result = res.body
        // console.log('res=====================================')
        // console.log(result)
        // console.log('res=====================================')
        result.should.be.a('object')
        result.should.have.property('name')
        result.should.have.property('price')
        result.should.have.property('description')
        result.should.have.property('featuredImg')
        result.should.have.property('tags')
        result.should.have.property('stock')
        done()
      })
  })
  //? ================================ POST items done ================================
  it('POST /items => Should return an object of created item', function (done) {
    let newItem = {
      name: 'input.name112',
      price: 200,
      stock: 100,
      description: 'input.description112',
      featuredImg: 'input.featuredImg112',
      tags: [
        'makan',
        'minum'
      ]
    }
    chai
      .request(app)
      .post('/items')
      .send(newItem)
      .end((err, res) => {
        let input = res.body.data
        // console.log('res=====================================')
        // console.log(input)
        // console.log('res=====================================')
        input.should.be.a('object')
        input.should.have.property('name')
        input.should.have.property('price')
        input.should.have.property('description')
        input.should.have.property('featuredImg')
        input.should.have.property('tags')
        input.should.have.property('stock')
        done()
      })
  })
  //? ================================ PUT items done ================================
  it.only('PUT /items/:id => Should return an object of updated item', function (done) {
    let newItem2 = {
      name: 'input.name3',
      // tags: 'input.tags3',
      price: 100,
      description: 'input.description3',
      featuredImg: 'input.featuredImg3',
    }
      chai
      .request(app)
        .put('/items/5cb9c981ee7070650cd3ddd0')
        .send(newItem2)
        .end((err, res) => {
          //! hasil update => { n: 1, nModified: 1, ok: 1 }
          let input = res.body
          // console.log('res=====================================')
          // console.log(input)
          // console.log('res=====================================')
          input.should.be.a('object')
          input.should.have.property('n')
          input.should.have.property('nModified', 1)
          input.should.have.property('ok')
          done()
        })
    })
  //? ================================ DELETE items done ================================
  it('DELETE /items/:id => should remove an item and return status code 204', function (done) {
    chai
      .request(app)
      .delete('/items/5cb9c958a662c6610085504e')
      .end((err, res) => {
        let input = res.body
        console.log('res=====================================')
        console.log(input)
        console.log('res=====================================')
        input.should.be.a('object')
        input.should.have.property('message')
        input.should.have.property('id')
        done()
      })
  })
})