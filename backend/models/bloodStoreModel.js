import mongoose from 'mongoose'

const bloodStoreSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    donor: {
      type: String,
      required: true,
    },
    hb: {
      type: Number,
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
      type: Number,
      required: true,
    },
    bag: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

const BloodStoreModel = mongoose.model('bloodStore', bloodStoreSchema)
export default BloodStoreModel
