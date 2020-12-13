import express from 'express'
import {
  deleteComment,
  getComment,
  postComment,
  putComment,
} from '../controllers/commentController.js'

import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(protect, getComment).post(protect, postComment)
router.route('/:id').put(protect, putComment).delete(protect, deleteComment)

export default router
