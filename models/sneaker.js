const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
});

const Sneaker = mongoose.model("Shoes", sneakerSchema);

module.exports = Sneaker;
