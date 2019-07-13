var db = require("../models");
var passport = require("../config/passport");
var middleware = require('../config/middleware/authenticated');

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json("/")
  });
//Route to register
  app.post("/api/register", function(req, res) {
    console.log(req.body);
    db.Person.create(req.body).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });

  // Route for logging user out
  app.get("/api/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function(req, res) {
      if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
      }
      else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
          name: req.user.firstName,
          email: req.user.email,
          id: req.user.id,
          budget: req.user.weeklyFunds,
          bank: req.user.bank,
          pic: req.user.imgUrl
        });
      }
    });

    app.delete("/api/delete_person/:id", function(req, res) {
      db.Person.destroy(
        {
        where: {
          id: req.params.id
        }
      }).then(function(dbPerson) {
        res.json(dbPerson)
        // res.redirect("/");
      });
    });

  app.get("/api/get_interests", middleware, function(req,res){
      
      db.Interest.findAll({
          where:{
              PersonId: req.user.id
          },
          include:[{
            model: db.Person
          }]
      }).then(function(person){
        // res.json(person);
        res.json(person)
        console.log(person);

      })
  })

      
  app.put("/api/update_cost", function(req, res) {
    db.Interest.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });

  app.put("/api/big_cost", function(req, res) {
    db.Person.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });
};