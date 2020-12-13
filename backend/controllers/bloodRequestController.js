import asyncHandler from 'express-async-handler'
import BloodRequestModel from '../models/bloodRequestModel.js'

export const getBloodRequest = asyncHandler(async (req, res) => {
  const bloodRequest = await BloodRequestModel.find({})
    .sort({ createdAt: -1 })
    .populate('user', ['name'])

  const newBloodRequest = bloodRequest.filter(
    (blood) =>
      blood.blood_component.platelet > 0 ||
      blood.blood_component.plasma > 0 ||
      blood.blood_component.rbc > 0 ||
      blood.blood_component.wb > 0
  )

  res.json(newBloodRequest)
})

export const postBloodRequest = asyncHandler(async (req, res) => {
  const user = req.user.id
  const patient_id = req.body.patient_id.toUpperCase()
  const patient_name = req.body.patient_name
  const blood_group = req.body.blood_group
  const plasma = req.body.plasma
  const platelet = req.body.platelet
  const rbc = req.body.rbc
  const wb = req.body.wb

  if (!plasma && !platelet && !rbc && !wb) {
    res.status(400)
    throw new Error('Blood Component is required')
  }

  let validateRequest = await BloodRequestModel.findOne({
    patient_id,
    patient_name,
  })

  if (validateRequest) {
    if (
      parseInt(validateRequest.blood_component.plasma) >= 1 ||
      parseInt(validateRequest.blood_component.platelet) >= 1 ||
      parseInt(validateRequest.blood_component.rbc) >= 1 ||
      parseInt(validateRequest.blood_component.wb) >= 1
    ) {
      res.status(400)
      throw new Error('You can not add again existed blood request')
    }
  }

  const bloodRequestFields = {
    user,
    patient_id,
    patient_name,
    blood_group,
  }
  const bloodComponentFields = {
    plasma,
    platelet,
    rbc,
    wb,
  }

  bloodRequestFields.blood_component = bloodComponentFields

  const bloodRequest = new BloodRequestModel(bloodRequestFields)
  await bloodRequest.save()

  if (bloodRequest) {
    res.status(201).json(bloodRequest)
  } else {
    res.status(400)
    throw new Error('Internal Server Error')
  }
})

export const putBloodRequest = asyncHandler(async (req, res) => {
  const user = req.user.id
  const patient_id = req.body.patient_id.toUpperCase()
  const patient_name = req.body.patient_name
  const blood_group = req.body.blood_group
  const plasma = req.body.plasma
  const platelet = req.body.platelet
  const rbc = req.body.rbc
  const wb = req.body.wb

  if (plasma === '' && platelet === '' && rbc === '' && wb === '') {
    res.status(400)
    throw new Error('Blood Component is required')
  }

  const bloodRequestFields = {
    user,
    patient_id,
    patient_name,
    blood_group,
  }
  const bloodComponentFields = {
    plasma,
    platelet,
    rbc,
    wb,
  }

  bloodRequestFields.blood_component = bloodComponentFields

  let bloodRequest = await BloodRequestModel.findOneAndUpdate(
    { _id: req.params.id },
    { $set: bloodRequestFields }
  )

  if (bloodRequest) {
    res.status(201).json(bloodRequest)
  } else {
    res.status(400)
    throw new Error('Internal Server Error')
  }
})

export const deleteBloodRequest = asyncHandler(async (req, res) => {
  const bloodRequest = await BloodRequestModel.findOneAndRemove({
    _id: req.params.id,
  })

  if (bloodRequest) {
    res.json(bloodRequest)
  } else {
    res.status(400)
    throw new Error('Invalid ID')
  }
})
