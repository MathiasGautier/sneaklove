const express = require("express");
const router = express.Router();
const Sneaker = require("../models/sneaker");
const uploadCloud = require("../config/cloudinary");

router.get("/", (req, res) => {
  res.render("index.hbs");
});

// router.get("/sneakers/:cat", (req, res) => {
//   Sneaker.find({})
//     .then((dbRes) => {
//       console.log(dbRes)
//       res.render("products", {
//         sneakers: dbRes
//       });

//     })
//     .catch((err) => {
//       console.log(err);
//     })

// });

router.get('/sneakers/:cat', (req, res) => {
  const query = {};
  if (req.params.cat !== 'collection') {
    query.category = req.params.cat;
  }

  Sneaker.find(query)
    .then(dbRes => {
      res.render('products', {
        sneakers: dbRes
      });
    })
    .catch(err => {
      console.log(err);
    });
});





router.get("/one-product/:id", (req, res) => {
  Sneaker.findById(req.params.id)
    .then((dbRes) => {
      res.render("one_product", {
        sneaker: dbRes,
      });
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});


router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});


router.get("/prod-add", (req, res) => {
  res.render("products_add");
});


// router.post('/prod-add', (req, res) => {
//   Sneaker.create(req.body)
//     .then((dbRes) => {
//       res.redirect('/prod-add');
//     })
//   .catch((err) => {
//     res.render('/prod-add', {
//       msg: err.message,
//     })
//   });
// });

router.post('/prod-add', uploadCloud.single('image'), (req, res, next) => {
  const { name, ref, size, price, category, id_tags} = req.body;
  const image = req.file.url;
  const newSneaker = new Sneaker({name, ref, size, price, category, id_tags, image});
  newSneaker.save()
  .then(dbRese => {
    res.redirect('/prod-add');
  })
  .catch(error => {
    console.log(error);
  })
});






router.get("/prod-manage", (req, res) => {
  Sneaker.find({})
    .then((dbRes) => {
      console.log(dbRes)
      res.render("products_manage", {
        sneakers: dbRes
      });

    })
    .catch((err) => {
      console.log(err);
    })
});


router.post("/product-delete/:id", (req, res)=> {
  Sneaker.findByIdAndDelete(req.params.id)
  .then((dbResult) =>{
      res.redirect("/prod-manage");
  })
  .catch((err)=> {
      res.render("error.hbs", {
          message: err.message,
      });
  });
});







router.get("/product-edit/:id", (req, res) => {
  Sneaker.findById(req.params.id)
    .then((dbRes) => {
      res.render("product_edit", {
        sneaker: dbRes,
      });
    })
    .catch((dbErr) => {
      console.log(dbErr);
    });
});


router.post("/product-edit/:id/", (req, res) => {
  if (req.body.title === "" || req.body.plot === "") {
    Sneaker.findById(req.params.id)
      .then((dbReslut) => {
        res.render("product_edit", {
          sneaker: dbResult,
          error: "Please enter all the fields",
        });
      })
      .catch((dbErr) => {
        console.log(dbErr)
      });
  } else {
    Sneaker.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      })
      .then((dbResult) => {

        res.redirect("/prod-manage");

      })
      .catch((dbErr) => {
        res.render("error.hbs", {
          message: err.message,
        });
      });
  }
});

module.exports = router;