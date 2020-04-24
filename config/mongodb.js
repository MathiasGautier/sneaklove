const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/sneakrs", {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then((self) => {
    console.log(`Connected to ${self.connection.name}`);
  })
  .catch((err) => {
    console.log(`An error occured while connecting to the Database...`);
  });
