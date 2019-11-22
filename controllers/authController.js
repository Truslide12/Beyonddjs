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
                  canDelete: req.body.canDelete,
                  stageName: req.body.stageName, 
                  img: req.body.img, 
                  summary: req.body.summary, 
                  genres: [], 
                  links: [],
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
      .findOneAndUpdate({ _id: req.session.passport.user.id }, 
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          city: req.body.city,
          state: req.body.state,
          zip: req.body.zip,
          phone: req.body.phone,
          viewAll: req.body.viewAll,
          canEdit: req.body.canEdit,
          canDelete: req.body.canDelete,
          stageName: req.body.stageName, 
          img: req.body.img, 
          summary: req.body.summary, 
          genres: req.body.genres, 
          links: req.body.links,
        },
        {upsert: true},
      )
      .then(updatedUser => {
        req.session.user = updatedUser;
        res.send(200);
      })
      .catch(err => res.status(500).send(err.message));
  },

  updateAvailability: (req, res) => {
    db.User
      .findOneAndUpdate( { 'email': req.body.email } , 
        {calendar: req.body.newCalendar },
        {new: true}, 
        )
        .then(updatedUser => {
          req.session.user = updatedUser;
          res.send(200);
        })
        .catch(err => res.status(500).send(err.message));
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
        .then(updatedEvent => {
          req.session.event = updatedEvent;
          res.send(200);
        })
      .catch(err => res.status(500).send(err.message));
  },

  updateEvent: (req, res) => { // figure out how to do this correctly
    db.Event
      .findOneAndUpdate({ _id: req.event._id }, 
        {
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
        },
        {upsert: true})
  },

  // Search

  search: (req, res) => {
    db.User.find({ role: "Entertainer" },
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
  },

  searchEvents: (req, res) => {
    // IceBox - to be added later
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
    db.Event.find( { publicEvent: true }, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    })
  },

  myEvents: (req, res) => {
      db.Event.find( {$or:[creator = req.user.email, entsContacted = req.user.email] },
        // need to figure out how to make this an or statement
        function (err, result) {
          if (err) {
            console.log(err);
          } else {
            res.json(result);
          }
        });
  }
};
