const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)

router.get("/", (req, res)=> {
    res.render("index.hbs");
})








module.exports = router;
