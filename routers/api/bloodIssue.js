const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const checkObjectId = require('../../middleware/checkObjectId');
const BloodIssue = require('../../models/BloodIssue');
const BloodRequest = require('../../models/BloodRequest');

// @route    GET api/blood-issue
// @desc     Get all blood issue
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const bloodIssue = await BloodIssue.find()
      .sort({ date: -1 })
      .populate('blood_request');
    res.json(bloodIssue);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/blood-issue
// @desc     Create blood issue
// @access   Private
router.post(
  '/',
  [auth, [check('patient', 'Patient is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = req.user.id;
    const patient = req.body.patient;
    const plasma = req.body.plasma;
    const platelet = req.body.platelet;
    const rbc = req.body.rbc;
    const wb = req.body.wb;

    console.log(req.body);
    if (plasma === '' && platelet === '' && rbc === '' && wb === '') {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Blood Component is required' }] });
    }

    try {
      const bloodIssueFields = {
        user,
        patient,
      };
      const bloodComponentFields = {
        plasma,
        platelet,
        rbc,
        wb,
      };

      bloodIssueFields.blood_component = bloodComponentFields;

      bloodIssue = new BloodIssue(bloodIssueFields);
      await bloodIssue.save();

      return res.status(200).json(await BloodIssue.find().sort({ date: -1 }));
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route    DELETE api/blood store
// @desc     Delete blood store
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const bloodIssue = await BloodIssue.findOneAndRemove({
      _id: req.params.id,
    });

    if (!bloodIssue) return res.json({ errors: [{ msg: 'Invalid ID' }] });

    return res.status(200).json(await BloodIssue.find().sort({ date: -1 }));
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
