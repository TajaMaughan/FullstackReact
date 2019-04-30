//prod.js - production keys here
module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    googleRedirectURI: 'https://fast-brushlands-42503.herokuapp.com/auth/google/callback'

}
