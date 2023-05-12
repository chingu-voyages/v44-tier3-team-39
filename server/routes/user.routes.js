const express = require('express')
const router = express.Router()
const usersController = require('../controllers/user.controller')

router.route('/') // already @ /users
    .get(usersController.getAllUsers)
    .post(usersController.createNewUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser)

router.route('/:id') //has user's milestones
    .get(usersController.getOneUser)


module.exports = router