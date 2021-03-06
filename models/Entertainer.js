const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EntertainerSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  entertainerName: {
    type: String,
    required: false
  },
  job: {
    type: String,
    required: false
  },
  img: {
    type: String,
    required: false
  },
  summary: {
    type: String,
    required: false
  },
  genres: { //need to add more genres
    ambient: {
        type: String,
        required: false
      },
      classical: {
        type: String,
        required: false
      },
      drumandbass: {
        type: String,
        required: false
      },
      edm: {
        type: String,
        required: false
      },
      dinnerparty: {
        type: String,
        required: false
      },
      pop: {
        type: String,
        required: false
      },
      rap: {
        type: String,
        required: false
      },
      rocknroll: {
        type: String,
        required: false
      },
  },
  links: {
      soundcloud: {
          type: String,
          required: false
      },
      facebook: {
        type: String,
        required: false
      },
      youtube: {
        type: String,
        required: false
      },
      mixcloud: {
        type: String,
        required: false
      },
      instagram: {
        type: String,
        required: false
      },
  },
  calendar: {
      type: Array,
      required: false
  }
})

const Entertainer = mongoose.model('Entertainer', EntertainerSchema);

module.exports = Entertainer;
