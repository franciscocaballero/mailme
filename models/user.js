const mongoose = require('mongoose');
const { Schema } = mongoose;
// const Schema = mongoose.Schema 'destructring '


const userSchema = new Schema({
  googleId: String,
});


mongoose.model('users', userSchema);
// teeling mongoose we want to make a new model of users
