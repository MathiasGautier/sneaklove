const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const upload = require("../config/cloudinary");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
router.get("/signup", (req, res, next) => {
<<<<<<< HEAD
  res.render("auth/login");
});
router.get("/login", (req, res, next) => {
  res.render("auth/login");
=======
    res.render("auth/login");
});

router.get("/login", (req, res, next) => {
    res.render("auth/login");
>>>>>>> bf628b60ec5ddaee8805f4814a14d7ba710bbbfc
});
router.post("/signup", (req, res, next) => {
<<<<<<< HEAD
  const name = req.body.name;
  const lastname = req.body.lastname;
  const password = req.body.password;
  const email = req.body.email;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);
  if (name === "" || lastname === "" || email === "" || password === "") {
    res.render("/signup", {
      msg: "Please enter your informations"
    });
    return;
  }
  User.findOne({
    email: email
  }).then(user => {
    if (user !== null) {
      res.render("signup", {
        msg: "account already exists !"
      });
      return;
    }
    User.create({
      name,
      lastname,
      email,
      password: hashPass
    })
      .then(() => {
        res.redirect("/");
      })
      .catch(error => {
        console.log(error);
      });
  });
});
router.post("/signin", (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (email === "" || password === "") {
    res.render("signin", {
      msg: "Please enter both, username and password to sign in."
    });
    return;
  }
  User.findOne({
    email: email
  })
    .then(user => {
      if (!user) {
        res.render("signin", {
          msg: "The email adress doesn't exist !"
        });
        return;
      }
      if (bcrypt.compareSync(password, user.password)) {
        req.session.currentUser = user;
        res.redirect("/");
      } else {
        res.render("auth/login", {
          msg: "Incorrect password"
        });
      }
    })
    .catch(error => {
      next(error);
    });
});
router.get("/logout", (req, res, next) => {
  req.session.destroy(err => {
    res.redirect("/");
  });
});
router.use((req, res, next) => {
  if (req.session.currentUser) {
    next();
  } else {
    res.redirect("/login");
  }
});
router.get("/private", (req, res, next) => {
  res.render("private");
});
router.get("/main", (req, res, next) => {
  res.render("main");
});
module.exports = router;
=======
    const name = req.body.name;
    const lastname = req.body.lastname;
    const password = req.body.password;
    const email = req.body.email;
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    if (name === "" || lastname === "" || email === "" || password === "") {
        res.render("/signup", {
            msg: "Please enter your informations",
        });
        return;
    }

    User.findOne({
        email: email
    }).then((user) => {
        if (user !== null) {
            res.render("signup", {
                msg: "account already exists !",
            });
            return;
        }
        User.create({
                name,
                lastname,
                email,
                password: hashPass,
            })
            .then(() => {
                res.redirect("/");
            })
            .catch((error) => {
                console.log(error);
            });
    });
});


router.post("/signin", (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    if (email === "" || password === "") {
        res.render("signin", {
            msg: "Please enter both, username and password to sign in.",
        });
        return;
    }
    User.findOne({
            email: email,
        })
        .then((user) => {
            if (!user) {
                res.render("signin", {
                    msg: "The email adress doesn't exist !",
                });
                return;
            }
            if (bcrypt.compareSync(password, user.password)) {
                req.session.currentUser = user;
                res.redirect("/");
            } else {
                res.render("auth/login", {
                    msg: "Incorrect password",
                });
            }
        })
        .catch((error) => {
            next(error);
        });
});

router.get("/logout", (req, res, next) => {
    req.session.destroy((err) => {
        res.redirect("/");
    });
});

router.use((req, res, next) => {
    if (req.session.currentUser) {
        next();
    } else {
        res.redirect("/login");
    }
});

router.get("/private", (req, res, next) => {
    res.render("private");
});

router.get("/main", (req, res, next) => {
    res.render("main");
});





module.exports = router;
>>>>>>> bf628b60ec5ddaee8805f4814a14d7ba710bbbfc
