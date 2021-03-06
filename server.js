require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
// const GitHubStrategy = require('passport-github2').Strategy;
const auth = require('./utils/auth');
const apis = require('./apis');

passport.use(new LocalStrategy({
  //
  usernameField: 'email',
  passwordField: 'password'
}, auth.verify));
// passport.use(new GitHubStrategy({
//     clientID: process.env.GITHUB_CLIENT_ID,
//     clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/github/callback"
//   },
//   auth.github
// ));
passport.serializeUser(auth.serializeUser);
passport.deserializeUser(auth.deserializeUser);

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/users', { useUnifiedTopology: true, useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const sessConfig = {
  secret: apis.sessionSecret, resave: false, saveUninitialized: false, 
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  cookie: { path: '/', httpOnly: false, maxAge: 5 * 60 * 1000 }
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.set('trust proxy', 1);
  sessConfig.cookie.secure = true;
}

app.use(session(sessConfig));
app.use(passport.initialize()); 
app.use(passport.session());
app.use(routes);

app.listen(process.env.PORT || 3001, () => {
	console.log('App is running');
})