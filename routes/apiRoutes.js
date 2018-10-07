var db = require("../models");

module.exports = function(app) {
  // LOGIN page
  app.post("/api/login", function(req, res) {
    if (req.body.category === 'Shelter' || req.body.category === 'Owner') {
        db.Provider.findOne({
            where: {
              email: req.body.email
            }
          }).then(function(dbProvider) {
            // If there's no user with the given email
            if (!dbProvider) {
                console.log("incorrect email");
                 res.json({
                     message: "Incorrect email."
                });
            }
            // If there is a user with the given email, but the password the user gives us is incorrect
            else if (dbProvider.password != req.body.password) {
                console.log("incorrect password");
                res.json({
                    message: "Incorrect password."
                });
            }
            else {
                // If none of the above, return the user
                console.log("found user");
                res.json({
                    user: dbProvider
                });
            }
        });
    }
    else if (req.body.category === "Borrower") {
        db.Borrower.findOne({
            where: {
              email: req.body.email
            }
          }).then(function(dbBorrower) {
            // If there's no user with the given email
            if (!dbBorrower) {
                console.log("incorrect email");
                res.json({message: "Incorrect email."
              });
            }
            // If there is a user with the given email, but the password the user gives us is incorrect
            else if (dbBorrower.password != req.body.password) {
                console.log("incorrect password");
                res.json({message: "Incorrect password."
              });
            }
            else {
                // If none of the above, return the user
                console.log("found user");
                res.json({
                    user: dbBorrower
                });
            }
        });
    }
  });

  // SIGNUP page
  // Add a user (Create a new user and store the new user in the petspacedb)
  // HTTP POST request
  app.post("/api/signup", function(req, res) {
      if (req.body.category === 'Shelter' || req.body.category === 'Owner') {
          db.Provider.create({
              email: req.body.email,
              password: req.body.password,
              name: req.body.name,
              streetAddress: req.body.streetAddress,
              city: req.body.city,
              state: req.body.state,
              zip: req.body.zip,
              phone: req.body.phone,
              category: req.body.category

              }).then(function(dbProvider) {
              res.json(dbProvider);
          });
      }
      else if (req.body.category === "Borrower") {
          db.Borrower.create({
              email: req.body.email,
              password: req.body.password,
              category: req.body.category,
              name: req.body.name,
              streetAddress: req.body.streetAddress,
              city: req.body.city,
              state: req.body.state,
              zip: req.body.zip,
              phone: req.body.phone

              }).then(function(dbBorrower) {
              res.json(dbBorrower);
          });
      }
  });

  // PROVIDER version of the site
  // Add a pet (Create a new pet and store the new pet in the petspacedb)
  // HTTP POST request
  app.post("/api/provider/addpet", function(req, res) {
    db.Pet.create({
        name: req.body.name,
        category: req.body.category,
        breed: req.body.breed,
        gender: req.body.gender,
        age: req.body.age,
        temperament: req.body.temperament,
        photoURL: req.body.photoURL,
        provider_id: req.body.providerID

        }).then(function(dbPet) {
        res.json(dbPet);
    });
  });

  // BORROWER version of the site
  // Submit reservation to take the selected pet on a trial
  // HTTP POST request
  app.post("/api/borrower/reservation", function(req, res) {
    db.Transaction.create({
        pet_id: req.body.pet_id,
        pet_name: req.body.pet_name,
        borrower_id: req.body.borrower_id,
        provider_id: req.body.provider_id
        }).then(function(dbTransaction) {
        res.json(dbTransaction);
    });
  });

  app.put("/api/borrower/reservation", function(req, res) {
      db.Pet.update({available: false},
        {where: {id: req.body.pet_id}
    }).then(function(dbPet) {
        res.json(dbPet);
    })
  });

  app.put("/api/provider/pickup", function(req, res) {
      db.Transaction.update({pickedUp: true},
        {where: {id: req.body.id}
    }).then(function(dbTransaction) {
        res.json(dbTransaction);
    })
  });

  app.put("/api/provider/dropoff", function(req, res) {
        db.Transaction.update({droppedOff: true},
        {where: {id: req.body.id}
    }).then(function(dbTransaction) {
        res.json(dbTransaction);
    })
  });

  app.put("/api/pet/markavailable", function(req, res) {
        db.Pet.update({available: true},
        {where: {id: req.body.pet_id}
    }).then(function(dbPet) {
        res.json(dbPet);
    })
  });

};
