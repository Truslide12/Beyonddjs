const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventsSchema = new Schema({
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
  location: {
    type: String,
    required: true
  },
  summary: {
    type: String,
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
  },
  entsContacted: {
    type: Array
  },
  entsConfirmed: {
    type: Array
  },
  schedule: {
      type: Array
  }
})

const Events = mongoose.model('Events', EventsSchema);

module.exports = Events;
