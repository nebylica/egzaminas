const express = require('express')
const router = express.Router()
const middle = require('../middle/validation.js')
const controller = require('../controlers/controller.js')

// router.post('/uploadItem',middle.upload , controller.upload)
// router.get('/load', controller.load)


module.exports = router