import mongoose from 'mongoose'

const bloodIssueSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'bloodRequest',
    },
    blood_component: {
      plasma: {
        type: String,
        default: null,
      },
      platelet: {
        type: String,
        default: null,
      },
      rbc: {
        type: String,
        default: null,
      },
      wb: {
        type: String,
        default: null,
      },
    },
  },
  {
    timestamps: true,
  }
)

const BloodIssueModel = mongoose.model('bloodIssue', bloodIssueSchema)
export default BloodIssueModel
