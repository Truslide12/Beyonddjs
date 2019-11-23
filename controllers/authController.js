const bcrypt = require('bcrypt');
const db = require('../models/');
const passport = require('passport');
// console.log(Event);

// Defining methods for the authController
module.exports = {
  // User Authorization and Universal Methods
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
                  city: req.body.city,
                  state: req.body.state,
                  zip: req.body.zip,
                  phone: req.body.phone,
                  calendar: [],
                  viewAll: req.body.viewAll,
                  canEdit: req.body.canEdit,
                  canDelete: req.body.canDelete
                })
              .then(newUser => {
                res.json(newUser);
              })
              .catch(err => res.status(500).send(err.message))

          })
          .catch(err => res.status(500).send(err.message));
      })
      .catch(err => res.status(500).send(err.message));
  },

  validateSession: (req, res) => {
    if (req.user) {
      res.json(req.user);
    } else {
      res.send(401);
    }
  },

  logout: (req, res) => {
    req.logout();
    res.send(200);
  },

  updateUser: (req, res) => { // figure out how to do this correctly
    db.User
      .findOne({ _id: req.session.passport.user.id })
      .then(user => {
        update({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          phone: req.body.phone,
          calendar: req.body.calendar
        })
      })
      .then(updatedUser => {
        req.session.user = updatedUser;
        res.send(200);
      })
  },

  updateAvailability: (req, res) => {
    db.User
      .findOne({ _id: req.session.passport.user.id })
      .then(user => {
        let newCalendar = user.calendar.concat(req.body.scheludw)
        update({
          calendar: newCalendar,
        })
      })
  },

  // Entertainer

  loadEntertainer: (req, res) => {
    db.Entertainer
      .findOne({ email: req.body.email })
      .then(entertainer => {
        if (!entertainer) {
          res.status(401).send("entertainer does not exist");
        }
        else {
          req.session.entertainer = entertainer;
          res.send(200);
        }
      })
      .catch(err => res.status(500).send(err.message))
  },

  updateEntertainer: (req, res) => {
    db.Entertainer
      .findOne({ email: req.body.email })
      .then(entertainer => {
        if (!entertainer) {
          create({
            email: req.body.email,
            entertainerName: req.body.entertainerName,
            job: req.body.job,
            img: req.body.img,
            summary: req.body.summary,
            genres: req.body.genres,
            links: req.body.links,
            calendar: req.body.calendar,
          })
            .then(updatedEntertainer => {
              req.session.user = updatedEntertainer;
              res.send(200);
            })
            .catch(err => res.status(500).send(err.message));
        }
        else {
          update({
            email: req.body.email,
            entertainerName: req.body.entertainerName,
            job: req.body.job,
            img: req.body.img,
            summary: req.body.summary,
            genres: req.body.genres,
            links: req.body.links,
            calendar: req.body.calendar,
          })
          .then(
            res.send(200))
            .catch(err => res.status(500).send(err.message));
        }
      })
  },

  // PromoterVendor

  loadPromoterVendor: (req, res) => {
    db.PromoterVendor
      .findOne({ email: req.body.email })
      .then(promoterVendor => {
        if (!promoterVendor) {
          res.status(401).send("promoterVendor does not exist");
        }
        else {
          req.session.promoterVendor = promoterVendor;
          res.send(200);
        }
      })
      .catch(err => res.status(500).send(err.message))
  },

  updatePromoterVendor: (req, res) => {
    db.PromoterVendor
      .findOne({ email: req.body.email })
      .then(promoterVendor => {
        if (!promoterVendor) {
          create({
            email: req.body.email,
            venueName: req.body.venueName,
            img: req.body.img,
            summary: req.body.summary,
            genres: req.body.genres,
            links: req.body.links,
            calendar: req.body.calendar
          })
            .then(updatedPromoterVendor => {
              req.session.user = updatedPromoterVendor;
              res.send(200);
            })
            .catch(err => res.status(500).send(err.message));
        }
        else {
          update({
            email: req.body.email,
            img: req.body.img,
            summary: req.body.summary,
            genres: req.body.genres,
            links: req.body.links,
            calendar: req.body.calendar,
          })
          Entertainer
            .catch(err => res.status(500).send(err.message));
        }
      })
  },

  // Events 

  createEvent: (req, res) => {
    // console.log(req.body);
    db.Event
      .create(
        {
          name: req.body.name,
          creator: req.body.creator,
          date: req.body.date,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
          description: req.body.description,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          publicEvent: req.body.public,
          phone: req.body.phone,
          maxEntertainers: req.body.maxEntertainers,
          entsContacted: req.body.entsContacted,
          entsConfirmed: req.body.entsConfirmed,
          schedule: req.body.schedule
        })
      .then(res.send(200))
      .catch(err => res.status(500).send(err.message));
  },

  updateEvent: (req, res) => { // figure out how to do this correctly
    db.Event
      .findOne({ _id: req.session.passport.event.id })
      .then(event => {
        update({
          date: req.body.date,
          startTime: req.body.startTime,
          endTime: req.body.endTime,
          description: req.body.description,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          public: req.body.public,
          phone: req.body.phone,
          maxEntertainers: req.body.maxEntertainers,
          entsContacted: req.body.entsContacted,
          entsConfirmed: req.body.entsConfirmed,
          schedule: req.body.schedule
        })
      })
  },

  // Search

  search: (req, res) => {
    // db.User.find({ role: "Entertainer" },
    //   function (err, result) {
    //     if (err) {
    //       console.log(err);
    //     } else {
    //       res.json(result);
    //     }
    //   });
    db.User.find({role: "Entertainer"})
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },

  searchEvents: (req, res) => {
    // var queryCond = {}
    // if(query.name){
    //    queryCond.name={$regex:query.name,$options:"i"};
    // }
    // if(query.city){
    //    queryCond.city=query.city;
    // }
    // if(query.type){
    //    queryCond.type=query.type;
    // }
    // Location.find(queryCond);
    //     Location.find({
    //       $and: [
    //         { name: { $regex: query.name } },
    //         { city: query.city },
    //         { type: query.type }
    //       ]
    // });
    db.Event.find({}, { date: req.event.date }, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    })
  }
};
