const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');


const User = mongoose.model('users');
// ^ one arug means we are trying to fetch something from our model
//^ User object is our model class

passport.serializeUser((user, done) => {
  done(null, user.id);
  //user.id is a token stuffed into cookie
});
// user is what we just pulld out of te database

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});
//^ turns cookie in to a instance || 'user'
passport.use(new GoogleStrategy({
  clientID: keys.googleClinetID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'  //route user is sent to after they grant permisson to use app

}, (accessToken, refreshToken, profile, done) => {

  User.findOne({ googleId: profile.id })// returns a promise
    .then((existingUser) => {
      if (existingUser) {
        //we already have a record with the given profile ID
        done(null, existingUser); //done takes 2 arguments
      } else {
        //we  dont have a user record with this ID , make a new record
        new User({ googleId: profile.id })
        .save()
        //^ creates new instances of User
        //^.save() addes instances to mongo db database
        .then((user) => done(null, user));
      }
    })

  // console.log('access token',accessToken); // gives permisson to use users data
  // console.log('refresh token',refreshToken); // allows use to refresh the accestoken
  // console.log('profil',profile); // all of the information
})
);
//passport.use 'use the new GoogleStrategy'
// new GoogleStrategy creates a new instances of the GoogleStrategy
//'I want to auth my users to google'
