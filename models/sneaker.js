const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
});

const Sneaker = mongoose.model("Shoes", sneakerSchema);

module.exports = Sneaker;