const express = require("express");
const router = express.Router();
const Sneaker = require("../models/sneaker");

router.get("/", (req, res) => {
  res.render("index.hbs");
});

router.get("/sneakers/:cat", (req, res) => {
  const query = {};
  if (req.params.cat !== "collection") {
    query.category = req.params.cat;
  }

  Sneaker.find(query)
    .then(dbRes => {
      res.render("products", {
        sneakers: dbRes
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/one_product/:id", (req, res) => {
  Sneaker.findById(req.params.id)
    .then(dbRes => {
      res.render("one_product", { sneaker: dbRes });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.get("/product_add", (req, res) => {
  res.render("product_add");
});

//create a model
router.post("/product_add", (req, res) => {
  Sneaker.create(req.body)
    .then(dbResult => {
      res.redirect("/product_add");
      // msg: "The email adress doesn't exist !";
    })
    .catch(dbErr => {
      res.redirect("/product_add");
    });
});
// router.post("/", (req, res) => {
//   Sneaker.create(req.body)
//     .then(dbRes => {
//       console.log(sneakrs.name);
//       res.render("sneakrs/product_add.hbs", {
//         sneakrs: dbRes
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       // res.redirect("/sneakers/product_add");
//     });
// });
router.get("/one_product", (req, res) => {
  Sneaker.findById(req.params.id)
    .then(dbRes => {
      res.render("one_product", {
        sneaker: dbRes
      });
    })
    .catch(dbErr => {
      console.log(dbErr);
    });
});

router.get("/prod_manage", (req, res) => {
  Sneaker.find({})
    .then(dbRes => {
      console.log(dbRes);
      res.render("products_manage", {
        sneakers: dbRes
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/product_edit/:id", (req, res) => {
  Sneaker.findById(req.params.id)
    .then(dbRes => {
      res.render("product_edit", {
        sneaker: dbRes
      });
    })
    .catch(dbErr => {
      console.log(dbErr);
    });
});

router.post("/product_edit/:id/", (req, res) => {
  if (req.body.title === "" || req.body.plot === "") {
    Sneaker.findById(req.params.id)
      .then(dbReslut => {
        res.render("product_edit", {
          sneaker: dbResult,
          error: "Please enter all the fields"
        });
      })
      .catch(dbErr => {
        console.log(dbErr);
      });
  } else {
    Sneaker.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
      .then(dbResult => {
        res.redirect("/prod_manage");
      })
      .catch(dbErr => {
        res.render("error.hbs", {
          message: err.message
        });
      });
  }
});

// router.get("/sneakrs/edit/:id"),
//   (req, res) => {
//     Sneaker.findById(req.params.id)
//       .then(dbRes => {
//         res.render("sneakers/product_edit", {
//           sneacker: dbRes
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

module.exports = router;
