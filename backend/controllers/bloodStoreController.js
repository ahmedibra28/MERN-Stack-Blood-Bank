import asyncHandler from 'express-async-handler'
import BloodStoreModel from '../models/bloodStoreModel.js'

export const getBloodStore = asyncHandler(async (req, res) => {
  const bloodStore = await BloodStoreModel.find()
    .sort({ createdAt: -1 })
    .populate('user', ['name'])

  res.json(bloodStore)
})

export const postBloodStore = asyncHandler(async (req, res) => {
  const user = req.user.id
  const donor = req.body.donor
  const hb = req.body.hb
  const blood_group = req.body.blood_group
  const blood_component = req.body.blood_component
  const unit = req.body.unit
  const active = true
  const bag = req.body.bag.toUpperCase()

  let duplicateHandler = await BloodStoreModel.find({
    blood_component,
    bag,
  })

  if (duplicateHandler.length >= 1) {
    res.status(400)
    throw new Error('This bag is already in the blood store')
  }

  const bloodStoreFields = {
    user,
    donor,
    hb,
    blood_group,
    blood_component,
    unit,
    active,
    bag,
  }

  const bloodStore = new BloodStoreModel(bloodStoreFields)
  await bloodStore.save()

  if (bloodStore) {
    res.status(201).json(bloodStore)
  } else {
    res.status(400)
    throw new Error('Internal Server Error')
  }
})

export const putBloodStore = asyncHandler(async (req, res) => {
  const user = req.user.id
  const donor = req.body.donor
  const hb = req.body.hb
  const blood_group = req.body.blood_group
  const blood_component = req.body.blood_component
  const unit = req.body.unit
  const active = true
  const bag = req.body.bag.toUpperCase()

  const bloodStoreFields = {
    user,
    donor,
    hb,
    blood_group,
    blood_component,
    unit,
    active,
    bag,
  }

  const bloodStore = await BloodStoreModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: bloodStoreFields }
  )

  if (bloodStore) {
    res.status(201).json(bloodStore)
  } else {
    res.status(400)
    throw new Error('Internal Server Error')
  }
})

export const deleteBloodStore = asyncHandler(async (req, res) => {
  const bloodStore = await BloodStoreModel.findOneAndRemove({
    _id: req.params.id,
  })

  if (bloodStore) {
    res.json(bloodStore)
  } else {
    res.status(400)
    throw new Error('Invalid ID')
  }
})
