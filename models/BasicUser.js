const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BasicUserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  hash: {
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
  role: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
})

const BasicUser = mongoose.model('BasicUser', BasicUserSchema);

module.exports = BasicUser;
