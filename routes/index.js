const express = require("express");
const router = express.Router();
const Sneaker = require("../models/sneaker");

router.get("/", (req, res) => {
  res.render("index.hbs");
});

router.get("/sneakers/:cat", (req, res) => {
  Sneaker.find({})
    .then((dbRes) => {
      console.log(dbRes)
      res.render("products", {
        sneakers: dbRes
      });

    })
    .catch((err) => {
      console.log(err);
    })

});

router.get("/one-product/:id", (req, res) => {
  res.send("one_product");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});


module.exports = router;