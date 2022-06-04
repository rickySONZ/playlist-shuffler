const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(new SpotifyStrategy({
  clientID: "720***********************1ad",
  clientSecret: "9e*********************************cb",
  callbackURL: "http://localhost:8000/auth/spotify/callback"
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));