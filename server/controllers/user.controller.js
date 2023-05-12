const User = require('../models/user.model')
const Milestone = require('../models/milestone.model')

const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')

// @desc Get all Users
// @route Get /users
// @access PUblic
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password').lean()

    if ( !users?.length ) {
        return res.status(400).json({message: 'No users found' })
    }
    res.json(users)
}  )

// @desc Create New User
// @route POST /users
// @access Private
const createNewUser = asyncHandler( async (req, res) => {
    const { username, password, email } = req.body

    if( !username || typeof username !== 'string' || !password || !email ) {
        return res.status(400).json({ message: 'All user fields are required /username, password and email' })
    }
    
    const duplicateEmail = await User.findOne({ email }).lean().exec()
    if(duplicateEmail) {
        return res.status(409).json({ message: 'Duplicate email' })
    }

    const hashedPwd = await bcrypt.hash(password, 10)
    const userObj = { username, 'password': hashedPwd, email }

    const user = await User.create(userObj)

    if(user) {
        res.status(201).json({ message: `New user ${username} created.//Server-side` }) // for testing
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
} )

// @desc Update a user
// @route PATCH /users
// @access Private
const updateUser = asyncHandler( async (req, res) => {
const { id, username, email, milestones } = req.body /*notifications*/
const {firstname, lastname, displayName} = username // grabbed for FE use if necessary, not instantiated below yet | Closure Tested on success.
if(!id || !username || !email) {
    return res.status(400).json({ message: 'All fields are required.' })
}

const user = await User.findById(id).exec()
if(!user) {
    return res.status(400).json({ message: `No user found with ID ${id}` }) // don't use for production 'No user found instead'
}

const duplicateEmail = await User.findOne({email}).lean().exec()
if ( duplicateEmail && duplicate?._id.toString() !== id ) {
    return res.status(409).json({ message: `Duplicate email` })
}

user.username = username
user.email = email
user.milestones = milestones
if(password) {
    user.password = await bcrypt.hash(password, 10)
}

const updatedUser = await user.save()

if(updatedUser) {
    res.status(201).json({message: `Updated user: ID - ${updatedUser.id}\tFirstName - ${user.firstname} LastName - ${user.lastname}`})
} else {
    res.status(400).json({ message: `User input could not be saved` })
}
} )

// @desc Delete a user
// @route DELETE /users
// @access Private
const deleteUser = asyncHandler( async (req, res) => {
    const { id, milestones } = req.body
    if(!id) {
        return res.status(400).json({ message: 'Valid User ID required to delete' })
    }

    if(milestones) {
        return res.status(400).json({ message: 'User is still assigned to group milestones' })
    }

    const user = await User.findById(id).exec()

    if(!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const result = await user.deleteOne()

    const reply = `Username ${result.username.displayName} with ID ${result._id} deleted`

    res.json(reply)
} )

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}