const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  hash: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  calendar: {
    type: Array,
    required: false,
    default: [],
  },
  viewAll: {
    type: Boolean,
    required: true,
    default:true
  },
  canEdit: {
    type: Boolean,
    required: false,
    default: false
  },
  canDelete: {
    type: Boolean,
    required: false,
    default: false
  },
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
