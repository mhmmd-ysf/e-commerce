const { verify } = require('../helpers/jwt')
const User = require('../model/user')

module.exports = (req, res, next) => {
  try {
    const decode = verify(req.headers.id_token, process.env.SECRET_KEY)
    User.findOne({
        email: decode.email
      })
      .then((found) => {
        if (found) {
          req.authenticated = decode
          next()
        } else {
          res.status(401).json({
            error: 'Authentication ERROR'
          })
        }
      })
      .catch(err => {
        res.status(401).json({
          error: 'Authentication ERROR'
        })
      })
  } catch (err) {
    res.status(401).json({
      error: 'Authentication ERROR'
    })
  }
}