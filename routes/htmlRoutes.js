var db = require("../models");
var passport = require("../config/passport");
var middleware = require("../config/middleware/authenticated");

module.exports = function (app) {

  app.get("/", authenticated, function (req, res) {

    db.Deal.findAll({include: [db.User]}).then(function (results) {
      console.log(results)

      let openDeals = [];
      let pendingDeals = [];
      let closedDeals = [];

      for (let i in results) {
        if (results[i].status == 'open') {
          openDeals.push(results[i])
        } else if (results[i].status == 'pending') {
          pendingDeals.push(results[i])
        } else if (results[i].status == 'closed') {
          closedDeals.push(results[i]);
        }
      }

      deals = { openDeals: openDeals, pendingDeals: pendingDeals, closedDeals: closedDeals }
      console.log(deals)
      res.render("home", deals)

    });
  });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
      res.render("404");
    });
};