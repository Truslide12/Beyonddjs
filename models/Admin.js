const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  viewAll: {
    type: Boolean,
    required: true
  },
  canEdit: {
    type: Boolean,
    required: true
  },
  canDelete: {
    type: Boolean,
    required: true
  },
})

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;