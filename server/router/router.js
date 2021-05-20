const express = require('express')
const router = express.Router()
const middle = require('../middle/validation.js')
const controller = require('../controlers/controller.js')

router.post('/createUser', middle.checkUserData, controller.createUser)

router.get('/getAllUsers', controller.getAllUsers)
router.get('/deleteUser/:id', controller.deleteUser)


module.exports = router