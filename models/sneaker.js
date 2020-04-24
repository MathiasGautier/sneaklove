const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD
const sneakerSchema = new Schema({
  name: String,
  ref: String,
  size: Number,
  price: Number,
  description: String,
  category: { type: String, enum: ["men", "women", "kids"] },
  image: String,
  price: String,
  id_tags: [{ type: Schema.Types.ObjectId, ref: "Tag" }]
=======
const sneakerSchema = new Schema ({
    name : String,
    ref :String,
    size: Number,
    price:Number,
    category :{type:String,
    enum: ["men", "women", "kids"]},
    image: String,
    price : Number,
    id_tags : [{type : Schema.Types.ObjectId, ref: "Tag"}]
>>>>>>> bf628b60ec5ddaee8805f4814a14d7ba710bbbfc
});

const Sneaker = mongoose.model("Shoes", sneakerSchema);

module.exports = Sneaker;
