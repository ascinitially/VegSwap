var db = require("../models");
var fs = require("fs");
var path = require("path");
var passport = require("../config/passport");
var middleware = require("../config/middleware/authenticated");

module.exports = function (app) {
 
  app.get("/api/deals", function (req, res) {
    db.Post.findAll({include: [veggieexchange.users]}).then(function (results) {
      res.json(results);
    });
  });

  app.post("/api/deals", function (req, res) {
    console.log(req.body);
    db.Deal.create(req.body).then(function (response) {
      // res.json(response);
      res.redirect('/');
    });
  });


  app.post("/api/users", function (req, res) {
    console.log(req.body);
    db.User.create(req.body).then(function (response) {
      // res.json(response);
      res.redirect('/');
    });
  });

  app.delete("/api/delete/:id", function (req, res) {
    db.Deal.destroy({ where: { id: req.params.id } }).then(function (response) {
      res.json(response);
    });
  })

  app.put("/api/deals", function (req, res) {
    console.log("id: " + req.body.id)
    db.Deal.update({
      status: req.body.status
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(response) {
      res.json(response);
    })
  })
}



