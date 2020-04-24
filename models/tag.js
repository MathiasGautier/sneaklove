const mongoose = require("mongoose");
const Schema = mongoose.Schema;
<<<<<<< HEAD
const tagSchema = new Schema({
  label: String
=======

const tagSchema = new Schema ({
    "label" : String,
>>>>>>> bf628b60ec5ddaee8805f4814a14d7ba710bbbfc
});
const Tag = mongoose.model("Tag", tagSchema);
module.exports = Tag;
