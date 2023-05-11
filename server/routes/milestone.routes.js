import express from 'express';
import {
  getAllMilestones,
  getOneMilestone,
  createNewMilestone,
  updateMilestone,
  deleteMilestone,
} from '../controllers/milestone.controller.js';

const router = express.Router();

// Get all milestones
router.get('/milestones', getAllMilestones);

// Get one milestone
router.get('/milestones/:milestoneNum', getOneMilestone);

// Create new milestone
router.post('/milestones', createNewMilestone);

// Update a milestone
router.patch('/milestones/:milestoneNum', updateMilestone);

// Delete a milestone
router.delete('/milestones/:milestoneNum', deleteMilestone);

export default router;
