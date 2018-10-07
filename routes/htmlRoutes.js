var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("home");
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/provider", function(req, res) {
    db.Provider.findOne({
      where: {},
      order: [[ 'createdAt', 'DESC' ]]
    }).then(function(dbProvider){
      res.render("provider_addpet", {provider: dbProvider});
    }); 
  });

  app.get("/borrower", function(req, res) {
    db.Borrower.findOne({
      where: {},
      order: [[ 'createdAt', 'DESC' ]]
    }).then(function(dbBorrower){
      db.Pet.findAll({}).then(function(dbPets) {
        res.render("borrower_allpets", {borrower: dbBorrower, pets: dbPets});
      })
    }); 
  });

  app.get("/provider/:id/addpet", function(req, res) {
    db.Provider.findOne({
      where: {id: req.params.id}
    }).then(function(dbProvider){
      res.render("provider_addpet", {provider: dbProvider});
    }); 
  });

  app.get("/borrower/:id/allpets", function(req, res) {
    db.Borrower.findOne({
      where: {id: req.params.id}
    }).then(function(dbBorrower){
      db.Pet.findAll({}).then(function(dbPets) {
        res.render("borrower_allpets", {borrower: dbBorrower, pets: dbPets});
      })
    }); 
  });

  app.get("/borrower/:id/cats", function(req, res) {
    db.Pet.findAll({where: {category: "Cat"}}).
    then(function(dbCats) {
      var handlebarsObject = {
        cats: dbCats,
        borr_id: req.params.id
      }
      res.render("borrower_cats", handlebarsObject);
    });
  });

  app.get("/borrower/:id/dogs", function(req, res) {
    db.Pet.findAll({where: {category: "Dog"}}).
    then(function(dbDogs) {
      var handlebarsObject = {
        dogs: dbDogs,
        borr_id: req.params.id
      }
      res.render("borrower_dogs", handlebarsObject);
    });
  });

  app.get("/borrower/:id/transactions", function(req, res) {
    db.Transaction.findAll({where:{borrower_id: req.params.id}}).
    then(function(dbTransactions) {
      var handlebarsObject = {
        transactions: dbTransactions,
        borr_id: req.params.id
      }
      res.render("borrower_transactions", handlebarsObject);
    });
  });

  app.get("/provider/:id/pet/:pet_id/transactions", function(req, res) {
    db.Transaction.findAll({where:{pet_id: req.params.pet_id}}).
    then(function(dbTransactions) {
      var handlebarsObject = {
        transactions: dbTransactions,
        prov_id: req.params.id,
        current_pet_id: req.params.pet_id
      }
      res.render("provider_transactions", handlebarsObject);
    });
  })

  app.get("/provider/:id/petsforpickup", function(req, res) {
    db.Transaction.findAll({where:{provider_id: req.params.id,
        pickedUp: false}}).
    then(function(dbTransactions) {
      var handlebarsObject = {
        transactions: dbTransactions,
        prov_id: req.params.id
      }
      res.render("provider_petsforpickup", handlebarsObject);
    });
  });

  app.get("/provider/:id/petsforreturn", function(req, res) {
    db.Transaction.findAll({where:{provider_id: req.params.id,
        pickedUp: true, droppedOff: false}}).
    then(function(dbTransactions) {
      var handlebarsObject = {
        transactions: dbTransactions,
        prov_id: req.params.id
      }
      res.render("provider_petsforreturn", handlebarsObject);
    });
  });

  app.get("/provider/:id/allpets", function(req, res) {
    db.Pet.findAll({where: {provider_id: req.params.id}}).
    then(function(dbPets) {
      var handlebarsObject = {
        pets: dbPets,
        prov_id: req.params.id
      }
      res.render("provider_allpets", handlebarsObject);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
