const mongooose = require("mongoose");
const userSchema = new mongooose.Schema({
  firstName: {
    type: String,
    default: "",
  },
  secondName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
});

module.exports = mongooose.model("User", userSchema);
