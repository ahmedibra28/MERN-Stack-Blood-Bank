const mongoose = require("mongoose");

const BloodRequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  patient_id: {
    type: String,
    required: true,
  },
  patient_name: {
    type: String,
    required: true,
  },
  blood_group: {
    type: String,
    required: true,
  },
  blood_component: {
    plasma: {
      type: String,
      default: "",
    },
    platelet: {
      type: String,
      default: "",
    },
    rbc: {
      type: String,
      default: "",
    },
    wb: {
      type: String,
      default: "",
    },
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("blood_request", BloodRequestSchema);
