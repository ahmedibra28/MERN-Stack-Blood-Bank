import asyncHandler from 'express-async-handler'
import CommentModel from '../models/commentModel.js'

export const getComment = asyncHandler(async (req, res) => {
  const Comment = await CommentModel.find()
    .sort({ createdAt: -1 })
    .populate('commentedBy', ['name'])
    .populate('commentApprovedBy', ['name'])

  res.json(Comment)
})

export const postComment = asyncHandler(async (req, res) => {
  const commentedBy = req.user.id
  const comment = req.body.comment

  const CommentFields = {
    commentedBy,
    comment,
  }

  const newComment = new CommentModel(CommentFields)
  await newComment.save()

  if (newComment) {
    res.status(201).json(newComment)
  } else {
    res.status(400)
    throw new Error('Internal Server Error')
  }
})

export const putComment = asyncHandler(async (req, res) => {
  const commentApprovedBy = req.user.id

  const updateComment = await CommentModel.findById(req.params.id)

  if (updateComment) {
    updateComment.commentApprovedBy = commentApprovedBy
    updateComment.active = false
  }

  const updatedComment = await updateComment.save()

  if (updatedComment) {
    res.status(201).json(updatedComment)
  } else {
    res.status(400)
    throw new Error('Internal Server Error')
  }
})

export const deleteComment = asyncHandler(async (req, res) => {
  const comment = await CommentModel.findById(req.params.id)

  if (comment.commentedBy == req.user.id) {
    comment.remove()
    res.json({ message: 'Comment removed' })
  } else {
    res.status(401)
    throw new Error('You Are Not Authorized to Perform This Operation')
  }
})
