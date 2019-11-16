const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = {
  verify: (email, password, done) => {
    db.User.findOne({ email: email })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'Incorrect email or password.' });
        }

        return bcrypt.compare(password, user.hash)
          .then(match => {
            if (match) {
              return done(null, user);
            }
            return done(null, false, { message: 'Incorrect email or password.' });
          })
          .catch(err => done(err));
      })
      .catch(err => done(err));
  },
  serializeUser: (user, done) => done(null, user._id),
  deserializeUser: (id, done) => {
    db.User.findById(id)
      .then(user => {
        done(null, user);
      })
      .catch(err => done(err));
  },
//   github: (accessToken, refreshToken, profile, done) => {
//     db.User.findOne({ githubId: profile.id })
//       .then(user => {
//         if (!user) {
//           db.User.create({ githubId: profile.id, email: profile.email })
//             .then(newUser => done(null, newUser))
//             .catch(err => done(err));
//         }
//         done(null, user);
//       })
//       .catch(err => done(err));
//   },
  isLoggedIn: (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect('/login');
    }
  },
  // isAdmin: (req, res, next) => {
  //   if (req.user.role === "Admin") {
  //     next();
  //   } else {
  //     res.sendStatus(403);
  //   }
  // }
};
