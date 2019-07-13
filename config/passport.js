var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function(email, password, done) {
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(user) {
      if (!user) {
        return done(null, false, {
          message: "No user with that email found."
        });
      }
      else if ((user.password != password)){
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;