const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoute = require('./routes/auth.js');
const userRoute = require('./routes/user.js');

const errorHandler = require('./middleware/error.js');
const passport = require('passport');

const session = require('express-session');
const User = require('./models/User.js');
const { getUserFromSession } = require('./middleware/session.js');
const app = express();

require('dotenv').config();
require('./connection');
require('./auth.js');

app.use(express.json());
app.use(cors({
  origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));


app.use(
  session({
    secret: '1234567uisehfjwegh',
    resave: false,
    saveUninitialized: true,
  })
  );
  
app.use('/api/auth', authRoute);
app.use(passport.initialize());
app.use(passport.session());
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/google/callback',
      //   passReqToCallback: true,
      scope: ['email', 'profile'],
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        console.log(profile);
        const user = await User.findOne({ googleId: profile.id });
        if (!user) {
          const newUser = new User({
            googleId: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            email: profile.emails[0].value,
          });
          await newUser.save();
        }
        return done(null, profile);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:3000/register',
    successRedirect: 'http://localhost:3000',
  })
);

app.get('/login/success', (req, res) => {
  console.log('rty',req.user);
  if (req.user) {
    res.status(200).json({ message: 'User logged in', user: req.user });
  } else {
    res.status(400).json({ message: 'User log in failed' });
  }
});

app.listen(5000, () => {
  console.log('Listening at port 5000');
});
