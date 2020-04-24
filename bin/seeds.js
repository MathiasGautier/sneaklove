require("dotenv").config();

const mongoose = require("mongoose");
const Sneaker = require("../models/sneaker");

const sneakers = [
  {
    name: "Nike Air Jordan",
    ref: "01",
    size: 42,
    category: "men",
    image:
      "https://stockx.imgix.net/Air-Jordan-1-Retro-High-UNC-Leather.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1565708126",
    price: "$ 1499"
    // id_tags : [{type : Schema.Types.ObjectId, ref: "Tag"}]
  },
  {
    name: "Adidas Stan Smith",
    ref: "02",
    size: 37,
    category: "women",
    image:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/0e8bc6bb51ee4dfba037aa7e00a3a301_9366/Stan_Smith_Shoes_White_EE5818_01_standard.jpg",
    price: "$ 3000"
    // id_tags : [{type : Schema.Types.ObjectId, ref: "Tag"}]
  },
  {
    name: "Louis Vuitton baby shoes",
    ref: "03",
    size: 10,
    category: "kids",
    image:
      "https://i.pinimg.com/originals/f3/8c/fa/f38cfa023686911845db32b0533fb901.jpg",
    price: "$ 1200"
    // id_tags : [{type : Schema.Types.ObjectId, ref: "Tag"}]
  }
];

mongoose
  .connect("mongodb://localhost:27017/sneakrs")
  .then(self => {
    console.log(`Connected to ${self.connection.name}`);

    // Seeds
    Sneaker.create(sneakers)
      .then(sneakers => {
        sneakers.forEach(sneakers => {
          console.log(sneakers.name);
        });
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.log(`Error occured while connecting to the Database ${err}`);
  });
