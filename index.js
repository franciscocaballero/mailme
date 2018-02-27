const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();


passport.use(new GoogleStrategy({
  clientID: keys.googleClinetID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'  //route user is sent to after they grant permisson to use app

}, (accessToken) => {
  console.log(accessToken);
})
);
//passport.use 'use the new GoogleStrategy'
// new GoogleStrategy creates a new instances of the GoogleStrategy
//'I want to auth my users to google'

app.get(
  '/auth/google',
  passport.authenticate('google', {
  scope: ['profile', 'email']
}))
//^ passing in route to be routed to
// using passport asking to authenticate and passing in 'google ' || "GoogleStrategy"
//asking google server for diffent scopes 'profile and email '









const PORT = process.env.PORT || 5000;

app.listen(PORT);
