const passport = require('passport');
const dotenv = require('dotenv');
const User = require('./models/User');

// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: 'http://localhost:5000/auth/google/callback',
//       //   passReqToCallback: true,
//       scope: ['email', 'profile'],
//     },
//     async function (accessToken, refreshToken, profile, done) {
//       try {
//         const user = await User.findOne({ googleId: profile.id });
//         if (!user) {
//           const newUser = new User({
//             googleId: profile.id,
//             firstName: profile.displayName,
//             email: profile.emails[0].value,
//           });
//           await newUser.save();
//         }
//         return done(null, profile);
//       } catch (error) {}
//       return done(error, null);
//     }
//   )
// );


