const bcrypt = require('bcrypt');
const db = require('../models/');

// console.log(Event);

// Defining methods for the authController
module.exports = {
  // User Authorization
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
      .findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
          res.status(401).send("email or password incorrect");
        }

        bcrypt.compare(req.body.password, user.hash)
          .then(match => {
            if (match) {
              req.session.user = user;
              res.send(200);
            }
            res.status(401).send("email or password incorrect");
          })
          .catch(err => res.status(500).send(err.message))
      })
      .catch(err => res.status(500).send(err.message));
  },
  validateSession: (req, res) => {
    const reqsid = decodeURIComponent(req.params.sid).split(':')[1].split('.')[0];
    console.info('sid:', req.sessionID, reqsid);
    if (reqsid === req.sessionID) {
      res.json(req.user);
    } else {
      res.send(403);
    }
  },
  logout: (req, res) => {
    req.session.destroy(err => {
      if (err) {
        res.status(500).send(err.message);
      }
      res.send(200);
    });
  },
    updateUser: (res, req) => { // figure out how to do this correctly
    db.User
      .findOne({_id: req.session.passport.user.id})
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
      // .then(newEvent => {
      //   req.session.event = newEvent;
      //   res.send(200);
      // })
      .then(res.send(200))
      .catch(err => res.status(500).send(err.message));
  },
  updateEvent: (res, req) => { // figure out how to do this correctly
    db.Event
      .findOne({_id: req.session.passport.event.id})
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
  search: (res, req) => {
    // need to get search data input and compare each to the correct role
//     var queryCond = {}
// if(query.name){ // query.name should be req.name (or whichever field they are searching)
//    queryCond.name={$regex:query.name,$options:"i"};
// }
// if(query.city){
//    queryCond.city=query.city;
// }
// if(query.type){
//    queryCond.type=query.type;
// }
// Location.find(queryCond); // location.find will be db.User.find(queryCond)
// Location.find({
//   $and: [
//     { name: { $regex: query.name } },
//     { city: query.city },
//     { type: query.type }
//   ]
// });
    db.User.find({}, function(err, result) { //{ name, creator, date, startTime, endTime, description, city, state, zip, publicEvent, phone, maxEntertainers, entsContacted, entsConfirmed, schedule}, 
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    })
  },
  searchEvents: (res, req) => {
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
    db.Event.find({}, { date: req.event.date }, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    })
  }
};
