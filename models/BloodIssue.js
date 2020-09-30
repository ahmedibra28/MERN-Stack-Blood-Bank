const mongoose = require('mongoose');

const BloodIssueSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'blood_request',
  },
  blood_component: [
    {
      plasma: {
        type: String,
        default: '',
      },
      platelet: {
        type: String,
        default: '',
      },
      rbc: {
        type: String,
        default: '',
      },
      wb: {
        type: String,
        default: '',
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('blood_issue', BloodIssueSchema);
