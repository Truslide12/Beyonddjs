const db = require('../models/');

// Defining methods for the authController
module.exports = {
  register: (req, res) => {
    // db.User
    //   .create({...})
    //   .then(newUser => res.json(newUser))
    //   .catch(err => res.status(422).json(err));
  },
  login: (req, res) => {
    // db.User
    //   .findOne({...})
    //   .then(user => res.json(user))
    //   .catch(err => res.status(422).json(err));
  },
  logout: (req, res) => {
    // ...
  }
};
