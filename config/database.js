const mongoose = require("mongoose");

const { Db_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(Db_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database sucessfully");
    })
    .catch((error) => {
      console.log("error in database connection", error);
    });
};
