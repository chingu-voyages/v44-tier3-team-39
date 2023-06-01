import Milestone from '../models/milestone.model.js';
import User from '../models/user.model.js';
import asyncHandler from 'express-async-handler';




//@desc Get all Milestones
// @route Get /milestones
// @access Private
export const getAllMilestones = asyncHandler( async (req, res) => {
    const milestones = await Milestone.find().lean()

    if(!milestones?.length) {
        return res.status(400).json({ message: 'No milestones found' })
    }

    const milestonesWithUser = await Promise.all(milestones.map(async (milestone) => {
        const user = await User.findById(milestone.user).lean().exec()
        return {...milestone, displayName: user.username.displayName}
    }))
    res.json(milestonesWithUser)
} )


//@desc Get one Milestone
// @route Get /milestone
//@access Private
export const getOneMilestone = asyncHandler( async (req, res) => {
    const milestone = await Milestone.findOne({milestoneNum}).lean()
    const user = await User.findById(milestone.user).lean()

    if(!milestone) {
        return res.status(400).json({message: `Milestone not found\t\t No.${milestone.milestoneNum} not found for ${user.displayName}`})
    }
    res.json(milestone)
} )


// @desc Create New Milestone
// @route POST /milestones
// @access Public
export const createNewMilestone = asyncHandler( async (req, res) => {
    const { title, description, deadline, status, owner} = req.body

    if(!title || !description?.description.length < 10 || !deadline || !status || !owner ) {
        return res.status(400).json({message: 'All milestone fields required /title, description > 10 characters, deadline set after today, status, owner, createdAt  '})
    }
    const milestone = await Milestone.create({title, description, deadline, status, owner})
    if( milestone ) {
        if(milestone.status.visibility === 'private') {
            hashedOwnerName = 'hidden'
            milestone.owner.displayName = hashedOwnerName
        }
        res.status(201).json({message: `New milestone ${milestone.milestoneNum} : ${milestone.title} created`})
    } else {
        res.status(400).json({ message: 'Invalid data received' })
    }
} )

// @desc Update a Milestone
// @route PATCH /milestones
// @access Private
export const updateMilestone = asyncHandler( async (req, res) => {
    const { title, description, deadline, status, owner, collaborators, milestoneNum } = req.body

    if(!title || !description?.description.length < 10 || !deadline?.deadline <= Date.now() || !status || !owner) {
        return res.json(400).json({ message: `Invalid Milestone...All fields required.`  })
    }
    const milestone = await Milestone.findOne({ milestoneNum }) //REMIND FE: search/request milestoneNum not _id
    if(!milestone) {
        return res.status(400).json({ message: `Milestone not found` })
    }
    const duplicate = await(findOne({title})).lean().exec()
    if(duplicate && duplicate?.owner.username.displayName ) {
        return res.status(409).json({message: `${owner.username.displayName} has duplicate milestone titles`})
    }

    milestone.title = title
    milestone.description = description
    milestone.deadline = deadline
    milestone.status = status
    if(status.visibility === 'public') {
        milestone.owner = owner
    } else if(status.visibility === 'private') {
        milestone.owner.displayName = 'hidden'
    }
    milestone.collaborators = collaborators
    if(collaborators) { /* set roles & permissions */ }

    const updatedMilestone = await milestone.save()
    res.status(201).json({message: `${updatedMilestone.owner}'s Note: ${updatedMilestone.milestoneNum} - ${updatedMilestone.title} hase been updated`})
} )


// @desc Delete a Milestone
// @route DELETE /milestone
// @access Private
export const deleteMilestone = asyncHandler( async (req, res) => {
    const {milestoneNum} = req.body //TODO collaborator check (roles)

    if(!milestoneNum || typeof milestoneNum !== 'number') {
        return res.status(400).json({ message: `Milestone Number is required` })
    }

    const milestone = await Milestone.findOne({milestoneNum}).exec()

    if(!milestone) {
        return res.status(400).json({ message: 'Milestone Not Found' })
    }

    const result = await milestone.deleteOne()

    const reply =  `Milestone No. ${result.milestoneNum}\t${result.title} deleted`
    res.json(reply)

} )

