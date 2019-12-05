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
      .findOneAndUpdate(req.params.id).then( user => {
          user.email = req.body.email,
          user.firstName = req.body.firstName,
          user.lastName = req.body.lastName,
          user.city = req.body.city,
          user.state = req.body.state,
          user.zip = req.body.zip,
          user.phone = req.body.phone,
          user.calendar = req.body.calendar,
          user.viewAll = req.body.viewAll,
          user.canEdit = req.body.canEdit,
          user.canDelete = req.body.canDelete,
          user.stageName = req.body.stageName, 
          user.img = req.body.img, 
          user.summary = req.body.summary, 
          user.genres = req.body.genres, 
          user.links = req.body.links,
          user.save()
          .then(() => res.json("Your information has been Updated!"))
          .catch(err => res.status(400).json("error: " + err))
        })
      .then(res => {
        res.send(200);
      })
      .catch(err => res.status(500).send(err.message));
  },

  updateAvailability: (req, res) => {
    console.log(req.body.schedule)
    db.User
      .findById(req.params._id)
        .then(user => {
          user.email = req.body.email,
          user.firstName = req.body.firstName,
          user.lastName = req.body.lastName,
          user.city = req.body.city,
          user.state = req.body.state,
          user.zip = req.body.zip,
          user.phone = req.body.phone,
          user.calendar = req.body.schedule,
          user.viewAll = true,
          user.canEdit = false,
          user.canDelete = false,
          user.stageName = req.body.stageName, 
          user.img = req.body.img, 
          user.summary = req.body.summary, 
          user.genres = req.body.genres, 
          user.links = req.body.links,

          res.status(200).json({user});
          user.save()
          .then(() => res.json('Schedule is updated!'));
        })
        .catch(err => res.status(500).send(err.message));
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
      .findOneAndUpdate( { _id: req.body._id } , 
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
      .findOneAndUpdate(req.event._id).then( event =>{
          event.date = req.body.date,
          event.startTime = req.body.startTime,
          event.endTime = req.body.endTime,
          event.description = req.body.description,
          event.city = req.body.city,
          event.state = req.body.state,
          event.zip = req.body.zip,
          event.public = req.body.public,
          event.phone = req.body.phone,
          event.maxEntertainers = req.body.maxEntertainers,
          event.entsContacted = req.body.entsContacted,
          event.entsConfirmed = req.body.entsConfirmed,
          event.schedule = req.body.schedule,

          event.save()
            .then(() => res.json("Your event has been updated"))
            .catch(err => res.status(400).json("Error: " + err))
        },
        {upsert: true})
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
