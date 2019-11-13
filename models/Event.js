const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    unique: true
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
  public: {
    type: Boolean,
    require: false
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

const Events = mongoose.model('Events', EventsSchema);

module.exports = Events;
