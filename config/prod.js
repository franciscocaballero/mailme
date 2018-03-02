//prod.js - production
module.exports = {
  googleClinetID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY// cookie key is random numbers made on the fly

}
