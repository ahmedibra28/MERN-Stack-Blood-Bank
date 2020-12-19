import asyncHandler from 'express-async-handler'
import BloodStoreModel from '../models/bloodStoreModel.js'
import BloodIssueModel from '../models/bloodIssueModel.js'
import BloodRequestModel from '../models/bloodRequestModel.js'

export const getBloodIssue = asyncHandler(async (req, res) => {
  const bloodIssue = await BloodIssueModel.find({})
    .sort({ createdAt: -1 })
    .populate('user', ['name'])
    .populate('patient', ['patient_id', 'patient_name'])

  res.json(bloodIssue)
})

export const postBloodIssue = asyncHandler(async (req, res) => {
  const user = req.user.id
  const patient = req.body.patient
  const plasma = req.body.plasma
  const platelet = req.body.platelet
  const rbc = req.body.rbc
  const wb = req.body.wb

  const bloodIssueFields = {
    user,
    patient,
  }
  const bloodComponentFields = {
    plasma,
    platelet,
    rbc,
    wb,
  }

  bloodIssueFields.blood_component = bloodComponentFields

  const bloodIssue = new BloodIssueModel(bloodIssueFields)
  await bloodIssue.save()

  // Update Blood Store Status
  if (plasma) {
    const request = await BloodRequestModel.findById(patient)
    const store = await BloodStoreModel.findById(plasma)
    if (store) {
      store.active = false
      store.save()
    }
    if (request) {
      request.blood_component.plasma =
        Number(request.blood_component.plasma) - 1
      request.save()
    }
  }

  if (platelet) {
    const request = await BloodRequestModel.findById(patient)
    const store = await BloodStoreModel.findById(platelet)
    if (store) {
      store.active = false
      store.save()
    }
    if (request) {
      request.blood_component.platelet =
        Number(request.blood_component.platelet) - 1
      request.save()
    }
  }

  if (rbc) {
    const request = await BloodRequestModel.findById(patient)
    const store = await BloodStoreModel.findById(rbc)
    if (store) {
      store.active = false
      store.save()
    }
    if (request) {
      request.blood_component.rbc = Number(request.blood_component.rbc) - 1
      request.save()
    }
  }

  if (wb) {
    const request = await BloodRequestModel.findById(patient)
    const store = await BloodStoreModel.findById(wb)
    if (store) {
      store.active = false
      store.save()
    }
    if (request) {
      request.blood_component.wb = Number(request.blood_component.wb) - 1
      request.save()
    }
  }

  if (bloodIssue && bloodIssue) {
    res.status(201).json(bloodIssue)
  } else {
    res.status(400)
    throw new Error('Internal Server Error')
  }
})

export const deleteBloodIssue = asyncHandler(async (req, res) => {
  const bloodIssue = await BloodIssueModel.findOneAndRemove({
    _id: req.params.id,
  })

  if (bloodIssue) {
    res.json(bloodIssue)
  } else {
    res.status(400)
    throw new Error('Invalid ID')
  }
})
