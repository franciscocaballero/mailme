const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
require('./models/User');
const passportConfig = require('./services/passport');


mongoose.connect(keys.mongoURI);
//^connect monggose to express app

const app = express();


authRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
