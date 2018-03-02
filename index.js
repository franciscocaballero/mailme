const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
require('./models/User');
const passportConfig = require('./services/passport');


mongoose.connect(keys.mongoURI);
//^connect monggose to express app

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,//30 days in miliseconds
    keys: [keys.cookieKey]
  })
);
//maxAge how long cookie can exist inside browers before t expires

app.use(passport.initialize());
app.use(passport.session());



authRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
