const mongoose = require('mongoose');

const BloodStoreSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  donor: {
    type: String,
    required: true,
  },
  hb: {
    type: String,
    required: true,
  },
  blood_group: {
    type: String,
    required: true,
  },
  blood_component: {
    type: String,
    default: '',
  },
  unit: {
    type: String,
    required: true,
  },
  bag: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('blood_store', BloodStoreSchema);
