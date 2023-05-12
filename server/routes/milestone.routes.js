const express = require('express')
const router = express.Router()
const milestonesController = require('..controllers/milestone.controller')
const tagsWare = require('../middleware/tagsWare')

router.route('/') // already @ /milestones
    .get(milestonesController.getAllMilestones)
    .post(tagsMiddleware, milestonesController.createNewMilestones)
    .patch(tagsMiddleware, milestonesController.updateMilestones)
    .delete(milestonesController.deleteMilestones)


module.exports = router