import express from 'express'
import {
  getBloodRequest,
  postBloodRequest,
  putBloodRequest,
  deleteBloodRequest,
} from '../controllers/bloodRequestController.js'

import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, postBloodRequest).get(getBloodRequest)
router
  .route('/:id')
  .put(protect, putBloodRequest)
  .delete(protect, deleteBloodRequest)

export default router
