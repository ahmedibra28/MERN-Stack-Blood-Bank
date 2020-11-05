const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const checkObjectId = require('../../middleware/checkObjectId');
const BloodRequest = require('../../models/BloodRequest');

// @route    GET api/blood-request
// @desc     Get all blood request
// @access   Private
router.get(
  '/',
  auth,
  asyncHandler(async (req, res) => {
    try {
      const bloodRequest = await BloodRequest.find()
        .sort({ date: -1 })
        .populate('user', ['name']);
      res.json(bloodRequest);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  })
);

// @route    POST api/blood-request
// @desc     Create blood request
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('patient_id', 'Patient ID is required').not().isEmpty(),
      check('patient_name', 'Patient Name is required').not().isEmpty(),
      check('blood_group', 'Blood Group is required').not().isEmpty(),
    ],
  ],
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = req.user.id;
    const patient_id = req.body.patient_id.toUpperCase();
    const patient_name = req.body.patient_name;
    const blood_group = req.body.blood_group;
    const plasma = req.body.plasma;
    const platelet = req.body.platelet;
    const rbc = req.body.rbc;
    const wb = req.body.wb;

    if (plasma === '' && platelet === '' && rbc === '' && wb === '') {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Blood Component is required' }] });
    }

    let validateRequest = await BloodRequest.findOne({
      patient_id,
      patient_name,
    });

    if (validateRequest) {
      if (
        parseInt(validateRequest.blood_component.plasma) >= 1 ||
        parseInt(validateRequest.blood_component.platelet) >= 1 ||
        parseInt(validateRequest.blood_component.rbc) >= 1 ||
        parseInt(validateRequest.blood_component.wb) >= 1
      ) {
        return res.status(400).json({
          errors: [{ msg: 'You can not add again existed blood request' }],
        });
      }
    }

    try {
      const bloodRequestFields = {
        user,
        patient_id,
        patient_name,
        blood_group,
      };
      const bloodComponentFields = {
        plasma,
        platelet,
        rbc,
        wb,
      };

      bloodRequestFields.blood_component = bloodComponentFields;

      bloodRequest = new BloodRequest(bloodRequestFields);
      await bloodRequest.save();

      return res
        .status(200)
        .json(
          await BloodRequest.find()
            .sort({ date: -1 })
            .populate('user', ['name'])
        );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  })
);

// @route    PUT api/blood-request/:id
// @desc     Update blood request
// @access   Private
router.put(
  '/:id',
  [
    auth,
    checkObjectId('id'),
    [
      check('patient_id', 'Patient ID is required').not().isEmpty(),
      check('patient_name', 'Patient Name is required').not().isEmpty(),
      check('blood_group', 'Blood Group is required').not().isEmpty(),
    ],
  ],
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = req.user.id;
    const patient_id = req.body.patient_id.toUpperCase();
    const patient_name = req.body.patient_name;
    const blood_group = req.body.blood_group;
    const plasma = req.body.plasma;
    const platelet = req.body.platelet;
    const rbc = req.body.rbc;
    const wb = req.body.wb;

    try {
      if (plasma === '' && platelet === '' && rbc === '' && wb === '') {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Blood Component is required' }] });
      }

      const bloodRequestFields = {
        user,
        patient_id,
        patient_name,
        blood_group,
      };
      const bloodComponentFields = {
        plasma,
        platelet,
        rbc,
        wb,
      };

      bloodRequestFields.blood_component = bloodComponentFields;

      let bloodRequest = await BloodRequest.findOneAndUpdate(
        { _id: req.params.id },
        { $set: bloodRequestFields }
      );

      return res
        .status(200)
        .json(
          await BloodRequest.find()
            .sort({ date: -1 })
            .populate('user', ['name'])
        );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  })
);

// @route    DELETE api/blood request
// @desc     Delete blood request
// @access   Private
router.delete(
  '/:id',
  [auth, checkObjectId('id')],
  asyncHandler(async (req, res) => {
    try {
      const bloodRequest = await BloodRequest.findOneAndRemove({
        _id: req.params.id,
      });

      if (!bloodRequest) return res.json({ errors: [{ msg: 'Invalid ID' }] });

      return res
        .status(200)
        .json(
          await BloodRequest.find()
            .sort({ date: -1 })
            .populate('user', ['name'])
        );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  })
);

module.exports = router;
