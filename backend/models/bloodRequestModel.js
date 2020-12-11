import mongoose from 'mongoose'

const bloodRequestSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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
        type: Number,
        default: 0,
      },
      platelet: {
        type: Number,
        default: 0,
      },
      rbc: {
        type: Number,
        default: 0,
      },
      wb: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
)

const BloodRequestModel = mongoose.model('bloodRequest', bloodRequestSchema)
export default BloodRequestModel
