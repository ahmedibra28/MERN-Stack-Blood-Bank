const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const checkObjectId = require('../../middleware/checkObjectId');
const BloodStore = require('../../models/BloodStore');

// @route    GET api/blood-store
// @desc     Get all blood store
// @access   Private
router.get(
  '/',
  asyncHandler(async (req, res) => {
    try {
      const bloodStore = await BloodStore.find()
        .sort({ date: -1 })
        .populate('user', ['name']);
      res.json(bloodStore);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  })
);

// @route    POST api/blood-store
// @desc     Create blood store
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('donor', 'Donor is required').not().isEmpty(),
      check('hb', 'HB is required').not().isEmpty(),
      check('blood_group', 'Blood Group is required').not().isEmpty(),
      check('blood_component', 'Blood Component is required').not().isEmpty(),
      check('unit', 'Unit is required').not().isEmpty(),
      check('bag', 'Bag is required').not().isEmpty(),
      check('hb', 'HB must between 12 and 20').isInt({
        min: 12,
        max: 20,
      }),
    ],
  ],
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = req.user.id;
    const donor = req.body.donor;
    const hb = req.body.hb;
    const blood_group = req.body.blood_group;
    const blood_component = req.body.blood_component;
    const unit = req.body.unit;
    const status = 'Stock';
    const bag = req.body.bag.toUpperCase();

    let duplicateHandler = await BloodStore.find({
      blood_component,
      bag,
    });

    if (duplicateHandler.length >= 1)
      return res
        .status(400)
        .json({ errors: [{ msg: 'This bag is already in the blood store' }] });

    try {
      const bloodStoreFields = {
        user,
        donor,
        hb,
        blood_group,
        blood_component,
        unit,
        status,
        bag,
      };

      bloodStore = new BloodStore(bloodStoreFields);
      await bloodStore.save();

      return res
        .status(200)
        .json(
          await BloodStore.find().sort({ date: -1 }).populate('user', ['name'])
        );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  })
);

// @route    POST api/blood-store/:id
// @desc     Update blood request
// @access   Private
router.put(
  '/:id',
  [
    auth,
    checkObjectId('id'),
    [
      check('donor', 'Donor is required').not().isEmpty(),
      check('hb', 'HB is required').not().isEmpty(),
      check('blood_group', 'Blood Group is required').not().isEmpty(),
      check('blood_component', 'Blood Component is required').not().isEmpty(),
      check('unit', 'Unit is required').not().isEmpty(),
      check('bag', 'Bag is required').not().isEmpty(),
      check('hb', 'HB must between 12 and 20').isInt({
        min: 12,
        max: 20,
      }),
    ],
  ],
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = req.user.id;
    const donor = req.body.donor;
    const hb = req.body.hb;
    const blood_group = req.body.blood_group;
    const blood_component = req.body.blood_component;
    const unit = req.body.unit;
    const status = req.body.status;
    const bag = req.body.bag.toUpperCase();

    try {
      const bloodStoreFields = {
        user,
        donor,
        hb,
        blood_group,
        blood_component,
        unit,
        status,
        bag,
      };

      let bloodStore = await BloodStore.findOneAndUpdate(
        { _id: req.params.id },
        { $set: bloodStoreFields }
      );

      return res
        .status(200)
        .json(
          await BloodStore.find().sort({ date: -1 }).populate('user', ['name'])
        );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  })
);

// @route    DELETE api/blood-store
// @desc     Delete blood store
// @access   Private
router.delete(
  '/:id',
  [auth, checkObjectId('id')],
  asyncHandler(async (req, res) => {
    try {
      const bloodStore = await BloodStore.findOneAndRemove({
        _id: req.params.id,
      });

      if (!bloodStore) return res.json({ errors: [{ msg: 'Invalid ID' }] });

      return res
        .status(200)
        .json(
          await BloodStore.find().sort({ date: -1 }).populate('user', ['name'])
        );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  })
);

module.exports = router;
