const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PromoterVendorSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
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
  calendar: {}
})

const PromoterVendor = mongoose.model('PromoterVendor', PromoterVendorSchema);

module.exports = PromoterVendor;
