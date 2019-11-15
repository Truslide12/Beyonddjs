const bcrypt = require('bcrypt');
const db = require('../models/');

// Defining methods for the authController
module.exports = {
  register: (req, res) => {
    bcrypt.genSalt()
      .then(salt => {
        bcrypt.hash(req.body.password, salt)
          .then(hash => {
            db.User
            .create(
              {
                email: req.body.email,
                hash,
                role: req.body.role,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                calendar: []
              })
              .then(newUser => {
                req.session.user = newUser;
                res.send(200);
              })
              .catch(err => res.status(500).send(err.message));
          })
          .catch(err => res.status(500).send(err.message));
      })
      .catch(err => res.status(500).send(err.message));
  },
  login: (req, res) => {
    db.User
      .findOne({ username: req.body.username })
      .then(user => {
        if (!user) {
          res.status(401).send("username or password incorrect");
        }

        bcrypt.compare(req.body.password, user.hash)
          .then(match => {
            if (match) {
              req.session.user = user;
              res.send(200);
            }
            res.status(401).send("username or password incorrect");
          })
          .catch(err => res.status(500).send(err.message))
      })
      .catch(err => res.status(500).send(err.message));
  },
  validateSession: (req, res) => {
    const reqsid = decodeURIComponent(req.params.sid).split(':')[1].split('.')[0];
    console.info('sid:', req.sessionID, reqsid);
    if (reqsid === req.sessionID) {
      res.send(200);
    }
    res.send(403);
  },
  logout: (req, res) => {
    req.session.destroy(err => {
      if (err) {
        res.status(500).send(err.message);
      }
      res.send(200);
    });
  }
    // updateUser: (res, req) => { // figure out how to do this correctly
  //   db.User
  //     .findOne({_id: req.session.passport.user.id})
  //     .then(user => {
  //       update({ email: user.email, firstName: req.body.firstName, lastName: req.body.lastName, firstName: req.body.firstName, })
  //     })
  // },
};
