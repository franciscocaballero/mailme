const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');




passport.use(new GoogleStrategy({
  clientID: keys.googleClinetID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'  //route user is sent to after they grant permisson to use app

}, (accessToken, refreshToken, profile, done) => {
  console.log('access token',accessToken); // gives permisson to use users data
  console.log('refresh token',refreshToken); // allows use to refresh the accestoken
  console.log('profil',profile); // all of the information
})
);
//passport.use 'use the new GoogleStrategy'
// new GoogleStrategy creates a new instances of the GoogleStrategy
//'I want to auth my users to google'
