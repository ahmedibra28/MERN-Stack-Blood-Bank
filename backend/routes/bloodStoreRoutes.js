import express from 'express'
import {
  getBloodStore,
  putBloodStore,
  postBloodStore,
  deleteBloodStore,
} from '../controllers/bloodStoreController.js'

import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getBloodStore).post(protect, postBloodStore)
router
  .route('/:id')
  .put(protect, putBloodStore)
  .delete(protect, deleteBloodStore)

export default router
