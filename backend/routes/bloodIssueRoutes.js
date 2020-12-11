import express from 'express'
import {
  getBloodIssue,
  postBloodIssue,
  deleteBloodIssue,
} from '../controllers/bloodIssueController.js'

import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, postBloodIssue).get(getBloodIssue)
router.route('/:id').delete(protect, deleteBloodIssue)

export default router
