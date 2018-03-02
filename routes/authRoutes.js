const passport = require('passport');


module.exports = (app) => {

  app.get(
    '/auth/google',
    passport.authenticate('google', {
    scope: ['profile', 'email']
  }))
  //^ passing in route to be routed to
  // using passport asking to authenticate and passing in 'google ' || "GoogleStrategy"
  //asking google server for diffent scopes 'profile and email '

  app.get('/auth/google/callback', passport.authenticate('google'));
  //once user gets sent back to '/auth/google/callback' they will now have code in URL
  //telling gserver that user isnt trying to authenticate for the first time
app.get('/api/logout', (req,res) => {
  req.logout();
  res.send(req.user);
} )

  app.get('/api/current_user', (req,res) => {
    res.send(req.user);
  });
};
