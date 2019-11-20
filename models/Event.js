const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    unique: false
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  description: {
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
  publicEvent: {
    type: Boolean,
    require: false,
    default: false
  },
  phone: {
    type: String,
    required: true
  },
  maxEntertainers: {
      type: Number,
      default: 1,
      required: true
  },
  entsContacted: {
    type: Array,
    default: false,
  },
  entsConfirmed: {
    type: Array,
    default: false,
  },
  schedule: {
      type: Array
  }
})

const Event = mongoose.model('Event', EventSchema);

// console.log(Event);

module.exports = Event;
